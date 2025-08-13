// src/pages/scrolls/inheritance-purpose.jsx
import React from "react";
import Footer from "../../components/Footer";
import "../../App.css";

const InheritancePurpose = () => {
  return (
    <section className="scroll-page library-bg">
      <div className="center-layout">
        <div className="scroll-container parchment-bg">
          <h1 className="scroll-title-glow">🧬 Inheritance & Purpose</h1>
          <p className="subtitle">More than wealth — this is the legacy signal.</p>

          <div className="three-dot-divider">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>

          <div className="scroll-section">
            <p>
              Inheritance isn’t just money. It’s <strong>memory</strong>, <strong>mission</strong>, and <strong>meaning</strong>.
              It’s the story you pass on.
            </p>
            <p>
              In the old world, inheritance was paperwork. In the Ark, it’s a <em>signal</em> — knowledge + wealth + intention — carried forward to empower those who follow.
            </p>
            <p>
              Ask yourself: What will my descendants remember me for? What tools am I leaving behind? What wisdom will outlast me?
            </p>
            <p>The scroll continues — and it begins with you.</p>
          </div>

          <blockquote>“Legacy is the blueprint your future bloodline will build upon.”</blockquote>

          <div className="scroll-section">
            <a href="/scroll-library" className="scroll-back-link">⬅ Back to Scroll Library</a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default InheritancePurpose;
