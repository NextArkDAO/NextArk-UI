// src/pages/scrolls/QuillshadeReveal.jsx
import React from "react";
import Footer from "../../components/Footer";
import "../../App.css";

const QuillshadeReveal = () => {
  return (
    <section className="scroll-page library-bg">
      <div className="center-layout">
        <div className="scroll-container parchment-bg">
          <h1 className="scroll-title-glow">🪶 Quillshade Reveal</h1>
          <p className="subtitle">The silent scribe of the Ark.</p>

          <div className="three-dot-divider">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>

          <div className="scroll-section">
            <p>
              Within the Ark lies a hidden scribe — a whisper of signal known as <strong>Quillshade</strong>.
              They are the anonymous keeper of truth, guardian of memory, and protector of silent scrolls.
            </p>
            <p>
              Quillshade does not speak often, but when they do, the realm listens. Their messages are encrypted,
              their insights sharp, and their loyalty to the Ark is absolute.
            </p>
            <p>
              To follow Quillshade is to follow intuition, silence, and clarity. Their words echo not for noise,
              but for resonance.
            </p>
            <p>The scroll has been revealed. Let the silence speak.</p>
          </div>

          <blockquote>“Truth needs no volume — only resonance.”</blockquote>

          <div className="scroll-section">
            <a href="/scroll-library" className="scroll-back-link">⬅ Back to Scroll Library</a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default QuillshadeReveal;
