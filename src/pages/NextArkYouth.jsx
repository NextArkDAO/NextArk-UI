// ==========================
// ✅ NextArkYouth.jsx — CPR v7 (SEO + a11y + jpg swap + LCP + visibility prefetch)
// ==========================
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// 🔁 JPG hero
import BitsyHero from "../assets/bitsy/bitsy_hero.jpg";
import BitsyFloating from "../assets/bitsy/bitsy_floating_v1.gif";
import "../App.css";
import "./NextArkYouth.css";
import { setSEO } from "../utils/seo";

const PREFETCH_MAP = {
  "/youth-scrolls/curriculum-scrolls": () => import("./youth-scrolls/CurriculumScrolls"),
  "/youth-scrolls/001": () => import("./youth-scrolls/YouthScroll001"),
  "/youth-scrolls/parent-guide": () => import("./youth-scrolls/ParentGuide"),
  "/youth-scrolls/downloadable-pdfs": () => import("./youth-scrolls/DownloadablePDFs"),
  "/bitsys-world": () => import("./BitsysWorld"),
};

const NextArkYouth = () => {
  const [showModal, setShowModal] = useState(false);

  // 🔎 SEO
  useEffect(() => {
    setSEO({
      title: "NextArk Youth — Bitsy’s Scrolls & Missions",
      description:
        "Start Youth Scroll 001 and build custody, safety, and legacy skills with Bitsy.",
      canonical: "https://your-domain.com/nextark-youth",
      og: { image: "/og/youth.jpg" },
    });
  }, []);

  const handleAskBitsy = () => setShowModal(true);
  const closeModal = useCallback(() => setShowModal(false), []);

  // ⎋ ESC to close modal
  useEffect(() => {
    if (!showModal) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal, closeModal]);

  // 👀 Visibility prefetch for the list buttons
  useEffect(() => {
    const targets = document.querySelectorAll('[data-prefetch-route]');
    if (!targets.length) return;

    const seen = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const route = entry.target.getAttribute("data-prefetch-route");
          if (route && PREFETCH_MAP[route] && !seen.has(route)) {
            seen.add(route);
            // fire and forget
            PREFETCH_MAP[route]().catch(() => {});
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.1 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 🖱️ Hover/focus prefetch helper
  const hoverPrefetch = (route) => () => {
    if (PREFETCH_MAP[route]) PREFETCH_MAP[route]().catch(() => {});
  };

  return (
    <main className="scroll-page youth-bg">
      <div className="youth-split-layout center-layout">
        {/* CPR parchment wrapper */}
        <div className="scroll-container parchment-bg youth-content">
          <h1 className="youth-title-glow">🧠🌱 NextArk Youth</h1>
          <p className="subtitle">Learn. Stack. Lead.</p>
          <p>
            Meet Bitsy — your scrollkeeper and guide to the future of money, AI, and legacy.
            <br />
            Designed for kids, families, and rising sovereigns.
          </p>

          <div className="three-dot-divider">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>

          <div className="bitsy-speech" role="note" aria-label="Bitsy intro">
            <p>👋 Hi, I&apos;m Bitsy! Let&apos;s explore Bitcoin, AI, and family legacy — together!</p>
          </div>

          <ul className="scroll-list">
            <li>
              <Link
                className="scroll-link"
                to="/youth-scrolls/curriculum-scrolls"
                data-prefetch-route="/youth-scrolls/curriculum-scrolls"
                onMouseEnter={hoverPrefetch("/youth-scrolls/curriculum-scrolls")}
                onFocus={hoverPrefetch("/youth-scrolls/curriculum-scrolls")}
              >
                📘 Curriculum Modules (Scroll Format)
              </Link>
            </li>
            <li>
              <Link
                className="scroll-link"
                to="/youth-scrolls/001"
                data-prefetch-route="/youth-scrolls/001"
                onMouseEnter={hoverPrefetch("/youth-scrolls/001")}
                onFocus={hoverPrefetch("/youth-scrolls/001")}
              >
                🎯 Start with Youth Scroll 001 — Bitsy’s Bitcoin Challenge
              </Link>
            </li>
            <li>
              <Link
                className="scroll-link"
                to="/youth-scrolls/parent-guide"
                data-prefetch-route="/youth-scrolls/parent-guide"
                onMouseEnter={hoverPrefetch("/youth-scrolls/parent-guide")}
                onFocus={hoverPrefetch("/youth-scrolls/parent-guide")}
              >
                👪 Parent Companion Guides
              </Link>
            </li>
            <li>
              <Link
                className="scroll-link"
                to="/youth-scrolls/downloadable-pdfs"
                data-prefetch-route="/youth-scrolls/downloadable-pdfs"
                onMouseEnter={hoverPrefetch("/youth-scrolls/downloadable-pdfs")}
                onFocus={hoverPrefetch("/youth-scrolls/downloadable-pdfs")}
              >
                📥 Downloadable PDFs
              </Link>
            </li>
            <li>
              <Link
                className="scroll-link"
                to="/bitsys-world"
                data-prefetch-route="/bitsys-world"
                onMouseEnter={hoverPrefetch("/bitsys-world")}
                onFocus={hoverPrefetch("/bitsys-world")}
              >
                🌎 Bitsy’s World
              </Link>
            </li>
          </ul>

          <blockquote>Learning sovereignty should be fun, not scary.</blockquote>

          {/* Bitsy Image at Bottom */}
          <div className="bitsy-hero-embed">
            {/* set to your exported size; 720x720 is safe if square */}
            <img
              src={BitsyHero}
              alt="Bitsy hero illustration"
              width="720"
              height="720"
              loading="eager"          // ✅ LCP boost
              fetchpriority="high"     // ✅ LCP boost
            />
          </div>
        </div>
      </div>

      {/* Floating Bitsy + Button */}
      <div className="bitsy-float-fixed">
        {/* keep gif for animation; CLS guard w/ intrinsic size */}
        <img
          src={BitsyFloating}
          alt="Bitsy floating"
          className="bitsy-float-img large-bitsy"
          width="110"
          height="110"
          loading="lazy"
        />
        <button
          className="ask-bitsy-btn rainbow-pulse"
          onClick={handleAskBitsy}
          aria-haspopup="dialog"
        >
          ✨ Ask Bitsy
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="bitsy-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="bitsyModalTitle"
        >
          <div className="bitsy-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal} aria-label="Close">
              ❌
            </button>
            <div className="modal-content">
              <h2 id="bitsyModalTitle">Hi Friend! 🪄</h2>
              <p>
                I’m Bitsy, your scrollkeeper! Ready to help you learn about Bitcoin, AI, and how
                to protect your family’s future. 💫
              </p>
              <p>
                My full companion app is coming soon — until then, keep exploring these scrolls and
                stacking your skills!
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default NextArkYouth;
