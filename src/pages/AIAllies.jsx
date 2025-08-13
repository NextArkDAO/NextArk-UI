// /src/pages/AIAllies.jsx — CPR Neon v3.2 (SEO + a11y + preconnect hints)
import React, { useEffect } from "react";
import "../App.css";
import "./AIAllies.css";
import { setSEO } from "../utils/seo";

const ALLIES = [
  { name: "Claude",  tag: "research + writing",  desc: "Deep reading, synthesis, outline → draft.", link: "https://claude.ai",            icon: "📖" },
  { name: "GPT‑5",   tag: "multimodal creation", desc: "Text, image, tools, and quick prototypes.",  link: "https://chat.openai.com",    icon: "🧠" },
  { name: "Grok",    tag: "pop‑signal takes",    desc: "Fast current‑signal + meme reads.",          link: "https://x.com",             icon: "⚡" },
  { name: "Gemini",  tag: "docs + classroom",    desc: "Slides, forms, and Drive workflows.",        link: "https://gemini.google.com", icon: "🗂️" },
];

// --- head hint helpers (idempotent) ---
const addHeadHint = (rel, href, crossorigin) => {
  try {
    const id = `${rel}:${href}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    link.id = id;
    if (crossorigin) link.crossOrigin = "";
    document.head.appendChild(link);
  } catch {}
};

const originOf = (url) => {
  try { return new URL(url).origin; } catch { return null; }
};

export default function AIAllies() {
  // 🔎 SEO baseline (per‑page; helmet via setSEO util)
  useEffect(() => {
    setSEO({
      title: "Meet Your AI Allies — NextArk",
      description:
        "Practical AI allies for creation, research, and learning. Calibrated for families and youth.",
      canonical: "https://your-domain.com/ai-allies",
      og: { image: "/og/ai-allies.jpg" },
    });
  }, []);

  // 🌐 Tiny perf: DNS‑prefetch all ally origins up front (cheap), preconnect on hover/visibility
  useEffect(() => {
    const origins = Array.from(
      new Set(ALLIES.map(a => originOf(a.link)).filter(Boolean))
    );
    // low-cost hint so mobile throttled runs resolve DNS faster
    origins.forEach((o) => addHeadHint("dns-prefetch", o));

    // when the grid becomes visible, begin gentle preconnects (warms TLS)
    const grid = document.querySelector(".allies-grid");
    if (!grid) return;
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        origins.forEach((o) => {
          if (!seen.has(o)) {
            seen.add(o);
            addHeadHint("preconnect", o, true);
          }
        });
        io.disconnect();
      });
    }, { threshold: 0.2 });
    io.observe(grid);
    return () => io.disconnect();
  }, []);

  const handleHover = (link) => () => {
    const o = originOf(link);
    if (o) addHeadHint("preconnect", o, true);
  };

  return (
    <main className="scroll-page ai-allies-bg">
      <div className="ai-wrap">
        <h1 className="neon-title">🤝 Meet Your AI Allies</h1>
        <p className="subtitle">Tools that amplify your learning and creation.</p>
        <div className="three-dot-divider"><span className="dot" /><span className="dot" /><span className="dot" /></div>

        <div className="allies-grid" role="list" aria-label="AI allies">
          {ALLIES.map((ally) => (
            <a
              key={ally.name}
              className="ally-card"
              href={ally.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Open ${ally.name}`}
              onMouseEnter={handleHover(ally.link)}
              onFocus={handleHover(ally.link)}
              role="listitem"
            >
              <div className="ally-header">
                <span className="ally-icon" aria-hidden="true">{ally.icon}</span>
                <h3>{ally.name}</h3>
              </div>
              <p className="ally-tag">{ally.tag}</p>
              <p className="ally-desc">{ally.desc}</p>
              <div className="ally-cta">Open</div>
            </a>
          ))}
        </div>

        <section className="ally-notes parchment-bg">
          <h2>How we use them</h2>
          <ul className="scroll-list">
            <li>Draft fast → edit slow. Keep the human voice.</li>
            <li>No private keys, seeds, or sensitive data — ever.</li>
            <li>Teach youth to <strong>“explain, then ask.”</strong></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
