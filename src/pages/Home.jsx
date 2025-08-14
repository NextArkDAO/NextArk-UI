// ==========================
// ✅ Home.jsx – CPR v10: SEO + IO fade + mobile LCP + safe prefetch set
// ==========================
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Home.css";

import BitsyAgentModal from "../components/Bitsy/BitsyAgentModal.jsx";
import BitsyToggleButton from "../components/Bitsy/BitsyToggleButton.jsx";

import { setSEO } from "../utils/seo";

// 🎯 Prefetch only the routes that exist
import {
  prefetchScrollLibrary,
  prefetchNextArkYouth,
  prefetchAIAllies,
  prefetchAffiliateTools,
} from "../utils/prefetch";

const Home = () => {
  const [showAgentModal, setShowAgentModal] = useState(false);
  const scrollRef = useRef(null);
  const buttonRowRef = useRef(null);

  // 🔎 SEO
  useEffect(() => {
    setSEO({
      title: "NextArk — Learn. Stack. Lead.",
      description:
        "Sovereign learning with Bitsy: scrolls, vaults, and missions for families and youth.",
      canonical: "https://your-domain.com/",
      og: { image: "/og/home.jpg", type: "website" },
    });
  }, []);

  // 🎞️ Efficient fade-ins (IntersectionObserver)
  useEffect(() => {
    const root = scrollRef.current || document;
    const targets =
      (root === document ? document : root).querySelectorAll(".scroll-fade");
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fade-in");
            io.unobserve(e.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -80px 0px", threshold: 0.05 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 📱 Mobile LCP: defer hero video playback
  useEffect(() => {
    const v = document.querySelector(".ark-hero-video-element");
    if (!v) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      v.removeAttribute("autoplay");
      return;
    }

    const start = () => v.play().catch(() => {});
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start);
      return () =>
        window.cancelIdleCallback && window.cancelIdleCallback(id);
    } else {
      const t = setTimeout(start, 250);
      return () => clearTimeout(t);
    }
  }, []);

  // ⏳ Idle prefetch (placeholder)
  useEffect(() => {
    const run = () => {};
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 2000 });
      return () =>
        window.cancelIdleCallback && window.cancelIdleCallback(id);
    } else {
      const t = setTimeout(run, 1200);
      return () => clearTimeout(t);
    }
  }, []);

  // 👀 Prefetch when button row is visible
  useEffect(() => {
    if (!buttonRowRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            prefetchScrollLibrary();
            prefetchNextArkYouth();
            prefetchAIAllies();
            prefetchAffiliateTools();
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(buttonRowRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* LEFT: Hero + Scroll Buttons + Quote */}
      <div className="home-left-column">
        <div className="ark-hero-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="ark-hero-video-element"
            poster="/the-ark.png"
            aria-label="NextArk hero animation"
          >
            <source src="/ark-loop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <h1 className="hero-title">NextArk DAO</h1>
            <p className="hero-subtitle">The Ark is Rising</p>
            <div className="wave-shimmer-layer" />
          </div>
        </div>

        {/* Horizontal Scroll Button Row */}
        <div className="scroll-button-row" ref={buttonRowRef}>
          <Link
            to="/scroll-library"
            className="scroll-button"
            aria-label="Open Scroll Library"
            onMouseEnter={prefetchScrollLibrary}
            onFocus={prefetchScrollLibrary}
            onTouchStart={prefetchScrollLibrary}
          >
            📜 Scroll Library
          </Link>

          <Link
            to="/nextark-youth"
            className="scroll-button"
            aria-label="Open NextArk Youth portal"
            onMouseEnter={prefetchNextArkYouth}
            onFocus={prefetchNextArkYouth}
            onTouchStart={prefetchNextArkYouth}
          >
            🌱 Youth Portal
          </Link>

          <Link
            to="/ai-allies"
            className="scroll-button"
            aria-label="Meet your AI Allies"
            onMouseEnter={prefetchAIAllies}
            onFocus={prefetchAIAllies}
            onTouchStart={prefetchAIAllies}
          >
            🤖 AI Allies
          </Link>

          <Link
            to="/affiliate-tools"
            className="scroll-button"
            aria-label="Open Affiliate Tools"
            onMouseEnter={prefetchAffiliateTools}
            onFocus={prefetchAffiliateTools}
            onTouchStart={prefetchAffiliateTools}
          >
            🔗 Tools
          </Link>
        </div>

        {/* Quote */}
        <div className="awakening-quote scroll-fade">
          <h2>“The Ark Doesn’t Teach 1st — It Awakens.”</h2>
        </div>
      </div>

      {/* RIGHT: Mission + Bitsy + Signal */}
      <div className="home-right-column" ref={scrollRef}>
        <h2 className="scroll-fade mission-title">
          🧭 A New World Needs New Scrolls
        </h2>

        <div className="mission-blurb scroll-fade">
          <h3>
            🌌 NextArk is the sovereign school for the age of AI and Bitcoin.
          </h3>
          <p>Scrolls. Agents. Youth. Freedom. Begin your journey below.</p>
        </div>

        <button
          onClick={() => setShowAgentModal(true)}
          className="scroll-button scroll-fade"
          aria-label="Talk to Bitsy in Agent Mode"
        >
          🧠 Talk to Bitsy (Agent Mode)
        </button>

        <section
          className="signal-embed scroll-glow scroll-fade"
          aria-labelledby="signal-title"
        >
          <h2 id="signal-title">📬 Join the Signal Scroll</h2>
          <p>Weekly drops on Bitcoin, AI, and sovereign family life.</p>
          <iframe
            src="https://substack.com/embed/nextark?hide=title"
            width="100%"
            height="200"
            frameBorder="0"
            scrolling="no"
            title="Substack"
            loading="lazy"
          ></iframe>
        </section>

        <div className="social-links scroll-fade">
          <a
            href="https://x.com/quillshade_ark"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NextArk on X"
          >
            🐦 X
          </a>
          <a
            href="https://www.instagram.com/nextark_dao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NextArk on Instagram"
          >
            📸 Instagram
          </a>
          <a
            href="https://www.tiktok.com/@nextark.dao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NextArk on TikTok"
          >
            🎵 TikTok
          </a>
          <a
            href="https://substack.com/@nextark"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NextArk on Substack"
          >
            📬 Substack
          </a>
        </div>
      </div>

      {showAgentModal && (
        <BitsyAgentModal
          isOpen={true}
          onClose={() => setShowAgentModal(false)}
        />
      )}
    </div>
  );
};

export default Home;
