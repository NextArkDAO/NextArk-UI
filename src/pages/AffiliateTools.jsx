// /src/pages/AffiliateTools.jsx — CPR Neon v3.3 (SEO + a11y + prefetch)
import React, { useEffect } from "react";
import "./AffiliateTools.css";
import { setSEO } from "../utils/seo";

// small helper: add <link rel="prefetch"> once per URL
const prefetchOnce = (href) => {
  try {
    if (!href) return;
    const id = `pf:${href}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = href;
    link.as = "fetch";
    link.id = id;
    document.head.appendChild(link);
  } catch {}
};

export default function AffiliateTools() {
  useEffect(() => {
    setSEO({
      title: "Affiliate Tools — NextArk",
      description:
        "Ready-to-post assets, link guidance, and launch checklists for NextArk affiliates.",
      canonical: "https://your-domain.com/affiliate-tools",
      og: { image: "/og/affiliate-tools.jpg" },
    });
  }, []);

  const BRAND_ZIP = "/assets/brand/nextark-brand-kit.zip";
  const CAPTIONS_TXT = "/assets/captions/caption-starters.txt";

  const warmBrand = () => prefetchOnce(BRAND_ZIP);
  const warmCaptions = () => prefetchOnce(CAPTIONS_TXT);

  return (
    <main className="scroll-page affiliate-bg" aria-labelledby="affTitle">
      <div className="aff-wrap">
        <header className="aff-header">
          <h1 id="affTitle" className="neon-title">🔗 Affiliate Tools</h1>
          <p className="subtitle">Assets and guidance for your drops.</p>
          <div className="three-dot-divider" aria-hidden="true">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>
        </header>

        <div className="aff-grid" role="list" aria-label="Affiliate resources">
          <section className="aff-card" role="listitem" aria-labelledby="brandKitH">
            <h2 id="brandKitH">Brand Kit</h2>
            <ul className="scroll-list">
              <li>Logos (SVG + PNG)</li>
              <li>Colors &amp; type (token sheet)</li>
              <li>Hero images (WebP)</li>
            </ul>
            <a
              className="scroll-link"
              href={BRAND_ZIP}
              download
              onMouseEnter={warmBrand}
              onFocus={warmBrand}
              aria-label="Download the NextArk Brand Kit ZIP"
            >
              ⬇ Download Brand Kit
            </a>
          </section>

          <section className="aff-card" role="listitem" aria-labelledby="captionsH">
            <h2 id="captionsH">Caption Starters</h2>
            <ul className="scroll-list">
              <li>IG / Threads: 3 short hooks</li>
              <li>X: 2 spicy lines + link</li>
              <li>Substack: 1‑paragraph drop intro</li>
            </ul>
            <a
              className="scroll-link"
              href={CAPTIONS_TXT}
              download
              onMouseEnter={warmCaptions}
              onFocus={warmCaptions}
              aria-label="Download the caption starters text file"
            >
              ⬇ Download Captions
            </a>
          </section>

          <section className="aff-card" role="listitem" aria-labelledby="utmH">
            <h2 id="utmH">Link Structure (UTM)</h2>
            <ul className="scroll-list">
              <li>
                Base:{" "}
                <code>https://your-domain.com/scroll-library</code>
              </li>
              <li>
                UTM:{" "}
                <code>?utm_source=ig&amp;utm_medium=post&amp;utm_campaign=launch</code>
              </li>
              <li>
                Example:{" "}
                <code>/scroll-library?utm_source=ig&amp;utm_medium=post&amp;utm_campaign=launch</code>
              </li>
            </ul>
          </section>

          <section className="aff-card" role="listitem" aria-labelledby="rhythmH">
            <h2 id="rhythmH">Drop Rhythm</h2>
            <ul className="scroll-list">
              <li>Mon: teaser visual</li>
              <li>Wed: scroll pull‑quote</li>
              <li>Fri: call to action + link</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
