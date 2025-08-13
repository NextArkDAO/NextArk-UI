// ==========================
// ✅ NodeboxVault.jsx — CPR v2.1 (SEO + canon routes + a11y + perf)
// ==========================
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../../components/Footer";
import BitsyFloating from "../../assets/bitsy/bitsy_floating_v1.gif";
import { setSEO } from "../../utils/seo";

const NodeboxVault = () => {
  // 🔎 SEO
  useEffect(() => {
    setSEO({
      title: "NodeBox Vault — Kits, Guides, Fulfillment",
      description:
        "Explore Cold Wallets, Seed Vaults, Custom Scroll Guides, Worksheets, and Fulfillment (Summer 2026).",
      canonical: "https://your-domain.com/bitsy/nodebox-vault",
      og: { image: "/og/nodebox-vault.jpg" },
    });
  }, []);

  return (
    <main className="scroll-page youth-bg" aria-labelledby="nodeboxTitle">
      <div className="scroll-container parchment-bg">
        <h1 id="nodeboxTitle" className="scroll-title-glow">🧰 Bitsy’s NodeBox Vault</h1>
        <p className="subtitle">
          Your sovereign starter kit — explained simply, with next steps.
        </p>

        <div className="three-dot-divider">
          <span className="dot" /><span className="dot" /><span className="dot" />
        </div>

        {/* Canonical child routes */}
        <ul className="scroll-list" aria-label="NodeBox sections">
          <li>
            <Link className="scroll-link" to="/bitsy/nodebox-vault/cold-wallets">
              🔐 Cold Wallets (Tangem, Trezor, Keystone)
            </Link>
          </li>
          <li>
            <Link className="scroll-link" to="/bitsy/nodebox-vault/scroll-guides">
              📜 Custom Scroll Guides (Physical + Digital)
            </Link>
          </li>
          <li>
            <Link className="scroll-link" to="/bitsy/nodebox-vault/seed-vaults">
              🔥 Metal Seed Vaults for Fireproof Recovery
            </Link>
          </li>
          <li>
            <Link className="scroll-link" to="/bitsy/nodebox-vault/worksheets">
              🔊 Sovereign Starter Worksheets
            </Link>
          </li>
          <li>
            <Link className="scroll-link" to="/bitsy/nodebox-vault/fulfillment">
              📦 Small‑Batch Fulfillment — Summer 2026
            </Link>
          </li>
        </ul>

        <blockquote>One vault, many paths. Start anywhere — finish sovereign.</blockquote>

        <div className="scroll-section">
          <Link to="/bitsys-world" className="scroll-link" aria-label="Back to Bitsy’s World">
            ⬅ Back to Bitsy’s World
          </Link>
        </div>
      </div>

      {/* Floating Bitsy */}
      <div className="bitsy-float-fixed" aria-hidden="true">
        <img
          src={BitsyFloating}
          alt="Bitsy floating"
          className="bitsy-float-img"
          width="110"
          height="110"
          loading="lazy"
        />
      </div>

      <Footer />
    </main>
  );
};

export default NodeboxVault;
