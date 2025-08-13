import React from "react";
import "../../App.css";
import Footer from "../../components/Footer";
import BitsyFloating from "../../assets/bitsy/bitsy_floating_v1.gif";

const YouthScroll004 = () => {
  return (
    <section className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">

        {/* 💰 Title */}
        <h1 className="scroll-title-glow">📜 Youth Scroll 004 – Sovereignty Starts Small</h1>
        <h2 className="subtitle">What gives money its power?</h2>

        {/* ✨ Bitsy Intro */}
        <div className="bitsy-speech">
          <p>🧠 Sovereignty means choosing for yourself — but to do that, you need to understand *value.*</p>
          <p>Not all money is the same. Let’s compare gold, paper, and Bitcoin… and decide what lasts.</p>
        </div>

        <div className="three-dot-divider">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>

        {/* 🧠 Core Learnings */}
        <div className="scroll-section">
          <h3>🧠 What You'll Learn:</h3>
          <ul className="scroll-bullet-list">
            <li>🏛️ What makes money… money?</li>
            <li>⚖️ Why gold has value</li>
            <li>💵 Why paper money loses value over time</li>
            <li>💻 Why Bitcoin is like digital gold</li>
          </ul>
        </div>

        {/* 🎯 Challenge Prompt */}
        <div className="scroll-section">
          <h3>🎯 Your Challenge:</h3>
          <p>
            Ask someone: “What kind of money do you trust most?”  
            Then write down (or draw) your *own version* of money — and explain why it has value.
          </p>
          <p className="scroll-tip">
            🧱 Example: A rare stone only found once a year, used to trade stories and tech.
          </p>
        </div>

        {/* 🎖️ Badge */}
        <div className="scroll-section">
          <h3>🏅 Badge Unlocked: <em>Value Seeker – Defender of Sound Money</em></h3>
          <p>✨ You’ve begun to question what gives things value. That’s the start of sovereignty.</p>
        </div>

        {/* 🚀 Next Scroll Tease */}
        <div className="scroll-section">
          <h3>🚀 Next Mission Preview</h3>
          <p>
            In Scroll 005, we zoom into the world of **sats** — the tiny sparks that make up a Bitcoin.  
            You’ll learn why stacking small can build something huge.
          </p>
        </div>

        {/* ⬅️ Back Link */}
        <div className="scroll-section">
          <p>
            <a href="/youth-scrolls/curriculum-scrolls" className="scroll-back-link">
              ⬅ Back to Curriculum Scrolls
            </a>
          </p>
        </div>
      </div>

      {/* 🧚 Floating Bitsy */}
      <div className="bitsy-float-fixed">
        <img
          src={BitsyFloating}
          alt="Bitsy Floating"
          className="bitsy-float-img"
        />
      </div>

      <Footer />
    </section>
  );
};

export default YouthScroll004;
