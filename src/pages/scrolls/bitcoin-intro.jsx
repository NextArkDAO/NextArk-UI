// src/pages/scrolls/bitcoin-intro.jsx
import React from "react";
import Footer from "../../components/Footer";
import "../../App.css";

const BitcoinIntro = () => {
  return (
    <section className="scroll-page library-bg">
      <div className="center-layout">
        <div className="scroll-container parchment-bg">
          <h1 className="scroll-title-glow">₿ What is Bitcoin?</h1>
          <p className="subtitle">The foundation layer of digital sovereignty.</p>

          <div className="three-dot-divider">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>

          <div className="scroll-section">
            <p><strong>Bitcoin</strong> runs without banks or middlemen — pure peer‑to‑peer value.</p>
            <p>Supply is fixed at <strong>21,000,000</strong>. Scarcity ⇒ <em>sound money</em>.</p>
            <p>Borderless. Permissionless. Unstoppable. Hold your keys, hold your future.</p>
          </div>

          <blockquote>“Sovereignty starts when custody returns to the keeper.”</blockquote>

          <div className="scroll-section">
            <a href="/scroll-library" className="scroll-back-link">⬅ Back to Scroll Library</a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BitcoinIntro;
