// ==========================
// ✅ HowScrollsAreMade.jsx – CPR Version
// ==========================
import React from "react";
import FloatingBitsy from "../../components/Bitsy/FloatingBitsy.jsx"; // ✅ match folder + .jsx
import Footer from "../../components/Footer";
import "./ScrollPages.css"; // ✅ Shared CSS for scroll styling

const HowScrollsAreMade = () => {
  return (
    <section className="scroll-page">
      <h1>📜 How Scrolls Are Made</h1>
      <p className="subtitle">
        Every scroll begins as a spark — a question, a mystery, a call to
        explore. Here’s how Bitsy crafts each one with love, lore, and purpose.
      </p>

      <div className="scroll-section">
        <h2>1. ✨ The Spark</h2>
        <p>
          Every scroll starts with a question from a young explorer like you.
          What is Bitcoin? Why does AI exist? Bitsy listens carefully and begins
          shaping the journey.
        </p>
      </div>

      <div className="scroll-section">
        <h2>2. 🪶 Scrollcrafting</h2>
        <p>
          Once the idea is clear, she gathers scroll materials: illustrations,
          analogies, and coded knowledge. Think of it like alchemy — mixing
          digital ink with ancient wisdom.
        </p>
      </div>

      <div className="scroll-section">
        <h2>3. 🎭 The Test</h2>
        <p>
          Before a scroll is shared, it’s tested by other agents, like
          Quillshade or Grok. They make sure the lessons are clear, kind, and
          powerful.
        </p>
      </div>

      <div className="scroll-section">
        <h2>4. 🧙 The Release</h2>
        <p>
          When it’s ready, the scroll is released into the Youth Portal — ready
          for you to read, reflect, and one day… create your own.
        </p>
      </div>

      <blockquote>
        Bitsy says: “A scroll is more than paper or pixels. It’s a spark of
        truth wrapped in love and shared with courage.”
      </blockquote>

      <FloatingBitsy />
      <Footer />
    </section>
  );
};

export default HowScrollsAreMade;
