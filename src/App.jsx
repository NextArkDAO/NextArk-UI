// ==========================
// ✅ App.jsx — CPR Routing (vFinal‑LZ: code‑split + graceful fallbacks)
// ==========================
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// --- Eager (keep instant for UX / LCP) ---
import Home from "./pages/Home.jsx";
import NextArkYouth from "./pages/NextArkYouth.jsx";
// 🔧 CI fix: match PascalCase filename exactly
import ScrollLibraryGateway from "./pages/ScrollLibraryGateway.jsx";

// --- Lazy (non‑critical splits) ---
const AffiliateTools      = lazy(() => import("./pages/AffiliateTools.jsx"));
const BitsysWorld         = lazy(() => import("./pages/BitsysWorld.jsx"));
const AIAllies            = lazy(() => import("./pages/AIAllies.jsx"));
const YouthScrollGateway  = lazy(() => import("./pages/YouthScrollGateway.jsx"));

const BitcoinIntro        = lazy(() => import("./pages/scrolls/bitcoin-intro.jsx"));
const WalletSafety        = lazy(() => import("./pages/scrolls/wallet-safety.jsx"));
const QuillshadeReveal    = lazy(() => import("./pages/scrolls/quillshade-reveal.jsx"));
const InheritancePurpose  = lazy(() => import("./pages/scrolls/inheritance-purpose.jsx"));

const YouthScroll001      = lazy(() => import("./pages/youth-scrolls/YouthScroll001.jsx"));
const YouthScroll002      = lazy(() => import("./pages/youth-scrolls/YouthScroll002.jsx"));
const YouthScroll003      = lazy(() => import("./pages/youth-scrolls/YouthScroll003.jsx"));
const YouthScroll004      = lazy(() => import("./pages/youth-scrolls/YouthScroll004.jsx"));
const YouthScroll005      = lazy(() => import("./pages/youth-scrolls/YouthScroll005.jsx"));
const CurriculumScrolls   = lazy(() => import("./pages/youth-scrolls/CurriculumScrolls.jsx"));
const ParentGuide         = lazy(() => import("./pages/youth-scrolls/ParentGuide.jsx"));
const DownloadablePDFs    = lazy(() => import("./pages/youth-scrolls/DownloadablePDFs.jsx"));

const WhoIsBitsy          = lazy(() => import("./pages/bitsy/WhoIsBitsy.jsx"));
const HowScrollsAreMade   = lazy(() => import("./pages/bitsy/HowScrollsAreMade.jsx"));
const AskBitsy            = lazy(() => import("./pages/bitsy/AskBitsy.jsx"));
const NodeboxVault        = lazy(() => import("./pages/bitsy/NodeboxVault.jsx"));

const ColdWallets         = lazy(() => import("./pages/bitsy/nodebox/ColdWallets.jsx"));
const SeedVaults          = lazy(() => import("./pages/bitsy/nodebox/SeedVaults.jsx"));
const ScrollGuides        = lazy(() => import("./pages/bitsy/nodebox/ScrollGuides.jsx"));
const Worksheets          = lazy(() => import("./pages/bitsy/nodebox/Worksheets.jsx"));
const Fulfillment         = lazy(() => import("./pages/bitsy/nodebox/Fulfillment.jsx"));

const NotFound            = lazy(() => import("./pages/NotFound.jsx"));

// Subtle site‑themed fallback (no layout shift)
const ArkFallback = () => (
  <div style={{ display: "grid", placeItems: "center", minHeight: "40vh" }}>
    <div className="scroll-divider pulse-divider">✦ loading ✦</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<ArkFallback />}>
        <Routes>
          {/* Core */}
          <Route path="/" element={<Home />} />
          <Route path="/nextark-youth" element={<NextArkYouth />} />
          <Route path="/scroll-library" element={<ScrollLibraryGateway />} />
          <Route path="/ai-allies" element={<AIAllies />} />
          <Route path="/affiliate-tools" element={<AffiliateTools />} />
          <Route path="/bitsys-world" element={<BitsysWorld />} />

          {/* Bitsy's World – canonical (kebab-case) */}
          <Route path="/bitsy/who-is-bitsy" element={<WhoIsBitsy />} />
          <Route path="/bitsy/how-scrolls-are-made" element={<HowScrollsAreMade />} />
          <Route path="/bitsy/ask-bitsy" element={<AskBitsy />} />
          <Route path="/bitsy/nodebox-vault" element={<NodeboxVault />} />

          {/* NodeBox – children */}
          <Route path="/bitsy/nodebox-vault/cold-wallets" element={<ColdWallets />} />
          <Route path="/bitsy/nodebox-vault/seed-vaults" element={<SeedVaults />} />
          <Route path="/bitsy/nodebox-vault/scroll-guides" element={<ScrollGuides />} />
          <Route path="/bitsy/nodebox-vault/worksheets" element={<Worksheets />} />
          <Route path="/bitsy/nodebox-vault/fulfillment" element={<Fulfillment />} />

          {/* Scrolls – Library */}
          <Route path="/scrolls/bitcoin-intro" element={<BitcoinIntro />} />
          <Route path="/scrolls/wallet-safety" element={<WalletSafety />} />
          <Route path="/scrolls/quillshade-reveal" element={<QuillshadeReveal />} />
          <Route path="/scrolls/inheritance-purpose" element={<InheritancePurpose />} />

          {/* Scrolls – Youth */}
          <Route path="/youth-scrolls" element={<YouthScrollGateway />} />
          <Route path="/youth-scrolls/001" element={<YouthScroll001 />} />
          <Route path="/youth-scrolls/002" element={<YouthScroll002 />} />
          <Route path="/youth-scrolls/003" element={<YouthScroll003 />} />
          <Route path="/youth-scrolls/004" element={<YouthScroll004 />} />
          <Route path="/youth-scrolls/005" element={<YouthScroll005 />} />
          <Route path="/youth-scrolls/curriculum-scrolls" element={<CurriculumScrolls />} />
          <Route path="/youth-scrolls/parent-guide" element={<ParentGuide />} />
          <Route path="/youth-scrolls/downloadable-pdfs" element={<DownloadablePDFs />} />

          {/* ---------- Legacy redirects (graceful) ---------- */}
          {/* CamelCase → kebab-case */}
          <Route path="/bitsy/WhoIsBitsy" element={<Navigate to="/bitsy/who-is-bitsy" replace />} />
          <Route path="/bitsy/HowScrollsAreMade" element={<Navigate to="/bitsy/how-scrolls-are-made" replace />} />
          <Route path="/bitsy/AskBitsy" element={<Navigate to="/bitsy/ask-bitsy" replace />} />
          <Route path="/bitsy/NodeboxVault" element={<Navigate to="/bitsy/nodebox-vault" replace />} />
          {/* Old nodebox paths */}
          <Route path="/bitsy/nodebox" element={<Navigate to="/bitsy/nodebox-vault" replace />} />
          <Route path="/youth-scrolls/nodebox" element={<Navigate to="/bitsy/nodebox-vault" replace />} />
          {/* Old child slugs → new slugs */}
          <Route path="/bitsy/nodebox/coldwallets" element={<Navigate to="/bitsy/nodebox-vault/cold-wallets" replace />} />
          <Route path="/bitsy/nodebox/seedvaults" element={<Navigate to="/bitsy/nodebox-vault/seed-vaults" replace />} />

          {/* ---------- Catch‑all 404 (keep last) ---------- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
