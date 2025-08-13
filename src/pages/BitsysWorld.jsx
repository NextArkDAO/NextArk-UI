// ==========================
// ✅ BitsysWorld.jsx — CPR v1.6 (SEO + canon links + a11y + webp + visibility prefetch)
// ==========================
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./BitsysWorld.css";
// 🔁 WebP transparent
import bitsyHero from "../assets/bitsy/bitsy-hero-transparent.webp";
import { setSEO } from "../utils/seo";

const PREFETCH_MAP = {
  "/bitsy/who-is-bitsy": () => import("./bitsy/WhoIsBitsy"),
  "/bitsy/how-scrolls-are-made": () => import("./bitsy/HowScrollsAreMade"),
  "/bitsy/nodebox-vault": () => import("./bitsy/NodeboxVault"),
  // warm a couple popular child routes too:
  "/bitsy/nodebox-vault/cold-wallets": () => import("./bitsy/nodebox/ColdWallets"),
  "/bitsy/nodebox-vault/seed-vaults": () => import("./bitsy/nodebox/SeedVaults"),
};

const BitsysWorld = () => {
  useEffect(() => {
    setSEO({
      title: "Bitsy’s World — Your Sovereign Guide",
      description:
        "Meet Bitsy and explore NodeBox Vault, guides, and missions for families and youth.",
      canonical: "https://your-domain.com/bitsys-world",
      og: { image: "/og/bitsy-world.jpg" },
    });
  }, []);

  // 👀 Visibility prefetch when links come into view
  useEffect(() => {
    const links = document.querySelectorAll('[data-prefetch-route]');
    if (!links.length) return;

    const seen = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const route = entry.target.getAttribute("data-prefetch-route");
          if (route && PREFETCH_MAP[route] && !seen.has(route)) {
            seen.add(route);
            PREFETCH_MAP[route]().catch(() => {});
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.1 }
    );

    links.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const hoverPrefetch = (route) => () => {
    if (PREFETCH_MAP[route]) PREFETCH_MAP[route]().catch(() => {});
  };

  return (
    <main className="scroll-page bitsyworld-bg">
      <h1>🌐 Welcome to Bitsy’s World</h1>
      <p className="subtitle">
        A magical space where kids and families learn about Bitcoin, AI, and building legacy — 
        one scroll at a time.
      </p>

      {/* 🪄 Bitsy Hero Visual */}
      <div className="bitsy-hero-wrapper">
        <img
          src={bitsyHero}
          alt="Bitsy the guide"
          className="bitsy-hero-img"
          width="720"
          height="720"
          loading="eager"          // ✅ LCP boost
          fetchpriority="high"     // ✅ LCP boost
        />
      </div>

      {/* ✨ Glowing Divider */}
      <div className="scroll-divider pulse-divider">✦✦✦</div>

      <ul className="scroll-list" aria-label="Bitsy’s World navigation">
        <li>
          <Link
            to="/bitsy/who-is-bitsy"
            data-prefetch-route="/bitsy/who-is-bitsy"
            onMouseEnter={hoverPrefetch("/bitsy/who-is-bitsy")}
            onFocus={hoverPrefetch("/bitsy/who-is-bitsy")}
          >
            🌟 Who is Bitsy?
          </Link>
        </li>
        <li>
          <Link
            to="/bitsy/how-scrolls-are-made"
            data-prefetch-route="/bitsy/how-scrolls-are-made"
            onMouseEnter={hoverPrefetch("/bitsy/how-scrolls-are-made")}
            onFocus={hoverPrefetch("/bitsy/how-scrolls-are-made")}
          >
            📘 How scrolls are made
          </Link>
        </li>
        <li>
          <span className="disabled-link" aria-disabled="true">
            🖌️ Visit the Scroll Studio (coming soon)
          </span>
        </li>
        <li>
          <Link
            to="/bitsy/nodebox-vault"
            data-prefetch-route="/bitsy/nodebox-vault"
            onMouseEnter={hoverPrefetch("/bitsy/nodebox-vault")}
            onFocus={hoverPrefetch("/bitsy/nodebox-vault")}
          >
            🧳 Explore the NodeBox Vault
          </Link>
        </li>
      </ul>

      {/* 🔮 Optional: prime popular child routes when the Vault link is visible */}
      <link rel="prefetch" href="/bitsy/nodebox-vault/cold-wallets" as="document" />
      <link rel="prefetch" href="/bitsy/nodebox-vault/seed-vaults" as="document" />

      <div className="scroll-studio-teaser">
        <h2>🖌️ Bitsy’s Scroll Studio</h2>
        <p>
          Coming Soon — Create your own scrolls, animations, and digital adventures. 
          Built for families, run by young sovereigns.
        </p>
        <button className="studio-button" disabled aria-disabled="true">
          ✨ Coming Soon
        </button>
      </div>

      <blockquote>
        Bitsy says: “Every big idea starts as a little spark. Let’s scroll together.”
      </blockquote>

      <Footer />
    </main>
  );
};

export default BitsysWorld;
