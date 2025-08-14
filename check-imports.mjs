// check-imports.mjs — QuickScan + AutoFix for missing/case-mismatched imports
// Usage:
//   node check-imports.mjs           -> dry run (report only)
//   node check-imports.mjs --fix     -> apply safe case-only renames
//
// What it does
// - Scans ./src for import paths
// - Warns on missing files
// - If a file exists but the case differs (e.g., bitsyAgentModal.jsx vs BitsyAgentModal.jsx),
//   it can rename the file on disk to match the import (with --fix).
//
// Safe defaults
// - Skips node_modules, .git, dist, etc.
// - Supports .jsx, .js, .css targets for local (“./” or “../”) imports only.

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "src");
const DRY_RUN = !process.argv.includes("--fix");
const EXTS = [".jsx", ".js", ".css"];
const SKIP_DIRS = new Set(["node_modules", ".git", "dist", ".vite", ".next"]);

function listSourceFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) out.push(...listSourceFiles(path.join(dir, entry.name)));
    } else if (entry.name.endsWith(".jsx") || entry.name.endsWith(".js")) {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

function n(p) {
  return p.replace(/\\/g, "/");
}

function resolveExact(importFromFile, spec) {
  const base = path.dirname(importFromFile);
  const raw = path.resolve(base, spec);
  if (fs.existsSync(raw) && fs.statSync(raw).isFile()) return raw;
  for (const ext of EXTS) {
    const cand = raw + ext;
    if (fs.existsSync(cand)) return cand;
  }
  return null;
}

function findCaseOnlyMatch(importFromFile, spec) {
  const fromDir = path.dirname(importFromFile);
  const raw = path.resolve(fromDir, spec);
  const dir = path.dirname(raw);
  const want = path.basename(raw);

  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return null;

  // Generate candidates (with and without extensions)
  const candidates = want.includes(".") ? [want] : EXTS.map((e) => want + e);

  const entries = fs.readdirSync(dir);
  for (const diskName of entries) {
    for (const desired of candidates) {
      if (diskName.toLowerCase() === desired.toLowerCase() && diskName !== desired) {
        return { dir, current: diskName, desired };
      }
    }
  }
  return null;
}

function forceCaseRename(dir, current, desired) {
  // Two-step rename so Windows/Git register case-only changes
  const a = path.join(dir, current);
  const temp = path.join(dir, `.__case_fix__${current}`);
  const b = path.join(dir, desired);
  fs.renameSync(a, temp);
  fs.renameSync(temp, b);
}

function scan() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error("❌ No src/ folder found. Run this from your project root.");
    process.exit(1);
  }

  const files = listSourceFiles(SRC_DIR);
  let issues = 0;
  let fixes = 0;

  console.log("🔍 Scanning imports in:", n(SRC_DIR));
  for (const file of files) {
    const code = fs.readFileSync(file, "utf8");
    const imports = [
      ...code.matchAll(/import\s+[^'"]*?from\s+['"]([^'"]+)['"]/g),
      ...code.matchAll(/import\s+['"]([^'"]+)['"]/g), // side-effect imports
    ];

    for (const m of imports) {
      const spec = m[1];
      if (!spec || !(spec.startsWith("./") || spec.startsWith("../"))) continue; // only local imports

      // 1) Exact resolve (with implicit extensions)
      const resolved = resolveExact(file, spec);
      if (resolved) continue;

      // 2) Case-only mismatch?
      const cm = findCaseOnlyMatch(file, spec);
      if (cm) {
        issues++;
        const from = n(path.join(cm.dir, cm.current));
        const to = n(path.join(cm.dir, cm.desired));
        if (DRY_RUN) {
          console.warn(`⚠️  Case mismatch: ${spec} in ${n(file)}\n    └─ ${from}  →  ${to}`);
        } else {
          try {
            forceCaseRename(cm.dir, cm.current, cm.desired);
            fixes++;
            console.log(`✅ Renamed: ${from} → ${to}`);
          } catch (e) {
            console.error(`❌ Rename failed: ${from} → ${to}\n    ${e.message}`);
          }
        }
        continue;
      }

      // 3) Truly missing
      issues++;
      console.error(`❌ Missing import target: "${spec}" in ${n(file)}`);
    }
  }

  if (DRY_RUN) {
    console.log(`\n🧪 Dry run complete. Issues found: ${issues}.`);
    console.log(`   Run with "--fix" to auto-rename case-only mismatches where safe.\n`);
  } else {
    console.log(`\n🛠 Fix run complete. Case renames applied: ${fixes}. Remaining issues: ${issues - fixes}.\n`);
  }
}

scan();
