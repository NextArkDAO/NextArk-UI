// /src/pages/youth-scrolls/CurriculumScrolls.jsx — CPR v3 (SEO + a11y + prefetch)
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { setSEO } from "../../utils/seo";

// warm the lazy bundles you registered in App.jsx
const prefetch001 = () => import("./YouthScroll001");
const prefetch002 = () => import("./YouthScroll002");
const prefetch003 = () => import("./YouthScroll003");
const prefetch004 = () => import("./YouthScroll004");
const prefetch005 = () => import("./YouthScroll005");

export default function CurriculumScrolls() {
  useEffect(() => {
    setSEO({
      title: "Curriculum Modules — NextArk Youth",
      description:
        "All youth scrolls in one place. Start with Bitsy’s Bitcoin Challenge and build from there.",
      canonical: "https://your-domain.com/youth-scrolls/curriculum-scrolls",
      og: { image: "/og/youth-curriculum.jpg" },
    });
  }, []);

  return (
    <main className="scroll-page youth-bg" aria-labelledby="curriculumTitle">
      <div className="center-layout">
        <div className="scroll-container parchment-bg">
          <h1 id="curriculumTitle" className="scroll-title-glow">📚 Curriculum Modules</h1>
          <p className="subtitle">This section houses all youth scrolls in an organized view.</p>

          <div className="three-dot-divider" aria-hidden="true">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>

          <ul className="scroll-list" aria-label="Youth curriculum scrolls">
            <li>
              <Link
                to="/youth-scrolls/001"
                className="scroll-link"
                aria-label="Open Youth Scroll 001 — Bitsy’s Bitcoin Challenge"
                onMouseEnter={prefetch001}
                onFocus={prefetch001}
              >
                📜 Youth Scroll 001 – Bitsy’s Bitcoin Challenge 🪙
              </Link>
            </li>
            <li>
              <Link
                to="/youth-scrolls/002"
                className="scroll-link"
                aria-label="Open Youth Scroll 002 — AI and You"
                onMouseEnter={prefetch002}
                onFocus={prefetch002}
              >
                📜 Youth Scroll 002 – AI &amp; You 🤖
              </Link>
            </li>
            <li>
              <Link
                to="/youth-scrolls/003"
                className="scroll-link"
                aria-label="Open Youth Scroll 003 — The Vault Code"
                onMouseEnter={prefetch003}
                onFocus={prefetch003}
              >
                📜 Youth Scroll 003 – The Vault Code 🔐
              </Link>
            </li>
            <li>
              <Link
                to="/youth-scrolls/004"
                className="scroll-link"
                aria-label="Open Youth Scroll 004 — Sovereignty Starts Small"
                onMouseEnter={prefetch004}
                onFocus={prefetch004}
              >
                📜 Youth Scroll 004 – Sovereignty Starts Small 🧠
              </Link>
            </li>
            <li>
              <Link
                to="/youth-scrolls/005"
                className="scroll-link"
                aria-label="Open Youth Scroll 005 — Satoshi Signal"
                onMouseEnter={prefetch005}
                onFocus={prefetch005}
              >
                📜 Youth Scroll 005 – Satoshi Signal ⚡
              </Link>
            </li>
          </ul>

          <blockquote>
            These scrolls are your keys to unlocking digital power, financial wisdom, and legacy awareness.
          </blockquote>
        </div>
      </div>
    </main>
  );
}
