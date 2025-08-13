// /src/pages/YouthScrollGateway.jsx — CPR v2 (SEO + a11y + prefetch)
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./YouthScrollGateway.css";
import { setSEO } from "../utils/seo";

// Prefetch the lazy bundles defined in App.jsx
const pf001 = () => import("./youth-scrolls/YouthScroll001");
const pf002 = () => import("./youth-scrolls/YouthScroll002");
const pf003 = () => import("./youth-scrolls/YouthScroll003");
const pf004 = () => import("./youth-scrolls/YouthScroll004");
const pf005 = () => import("./youth-scrolls/YouthScroll005");

export default function YouthScrollGateway() {
  useEffect(() => {
    setSEO({
      title: "Youth Scroll Missions — NextArk",
      description:
        "Start with Mission 001 and continue through beginner sovereignty skills with Bitsy.",
      canonical: "https://your-domain.com/youth-scrolls",
      og: { image: "/og/youth-missions.jpg" },
    });
  }, []);

  return (
    <main className="scroll-page youth-bg" aria-labelledby="youthGatewayTitle">
      <div className="center-layout">
        <div className="scroll-container parchment-bg">
          <h1 id="youthGatewayTitle" className="scroll-title-glow">🎓 Youth Scroll Missions</h1>
          <p className="subtitle">Pick a mission to begin your path.</p>

          <div className="three-dot-divider" aria-hidden="true">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>

          <div className="youth-scrolls-grid" role="list" aria-label="Available missions">
            <Link
              to="/youth-scrolls/001"
              className="youth-scroll-button"
              role="listitem"
              onMouseEnter={pf001}
              onFocus={pf001}
              aria-label="Open Mission 001: What is Bitcoin?"
            >
              Mission 001: What is Bitcoin?
            </Link>

            <Link
              to="/youth-scrolls/002"
              className="youth-scroll-button"
              role="listitem"
              onMouseEnter={pf002}
              onFocus={pf002}
              aria-label="Open Mission 002: AI & You"
            >
              Mission 002: AI &amp; You
            </Link>

            <Link
              to="/youth-scrolls/003"
              className="youth-scroll-button"
              role="listitem"
              onMouseEnter={pf003}
              onFocus={pf003}
              aria-label="Open Mission 3: The Internet Layer"
            >
              Mission 003: The Internet Layer
            </Link>

            <Link
              to="/youth-scrolls/004"
              className="youth-scroll-button"
              role="listitem"
              onMouseEnter={pf004}
              onFocus={pf004}
              aria-label="Open Mission 004: Sovereignty Starts Small"
            >
              Mission 004: Sovereignty Starts Small
            </Link>

            <Link
              to="/youth-scrolls/005"
              className="youth-scroll-button"
              role="listitem"
              onMouseEnter={pf005}
              onFocus={pf005}
              aria-label="Open Mission 005: Satoshi Signal"
            >
              Mission 005: Satoshi Signal
            </Link>
          </div>

          {/* Coming soon row (no links → no 404s) */}
          <div className="youth-scrolls-grid soon" aria-label="Coming soon missions">
            <span className="youth-scroll-button disabled" aria-disabled="true">
              Mission 006: Your First Wallet (soon)
            </span>
            <span className="youth-scroll-button disabled" aria-disabled="true">
              Mission 007: Cold Storage Quest (soon)
            </span>
            <span className="youth-scroll-button disabled" aria-disabled="true">
              Mission 008: Scroll Defender (soon)
            </span>
            <span className="youth-scroll-button disabled" aria-disabled="true">
              Mission 009: Echoes of the DAO (soon)
            </span>
            <span className="youth-scroll-button disabled" aria-disabled="true">
              Mission 010: Bitsy’s Final Trial (soon)
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
