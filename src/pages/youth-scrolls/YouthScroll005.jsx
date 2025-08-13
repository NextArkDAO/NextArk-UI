import React from "react";
import "../../App.css";
import Footer from "../../components/Footer";
import BitsyFloating from "../../assets/bitsy/bitsy_floating_v1.gif";

const YouthScroll005 = () => {
  return (
    <section className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">

        {/* 🧠 Title */}
        <h1 className="scroll-title-glow">📜 Youth Scroll 005 – Satoshi Signal</h1>
        <h2 className="subtitle">The tiniest spark can still light the flame.</h2>

        {/* ✨ Bitsy Intro */}
        <div className="bitsy-speech">
          <p>✨ Did you know that one Bitcoin is made of 100 million tiny pieces?</p>
          <p>They're called <strong>satoshis</strong> — or sats. You don't need a whole coin to start.</p>
        </div>

        <div className="three-dot-divider">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>

        {/* 🧠 Learnings */}
        <div className="scroll-section">
          <h3>🧠 What You'll Learn:</h3>
          <ul className="scroll-bullet-list">
            <li>🔢 What a satoshi (sat) is</li>
            <li>💸 How sats make up a whole bitcoin</li>
            <li>⚡ Why small amounts still carry big power</li>
            <li>📈 Why stacking little-by-little builds sovereignty</li>
          </ul>
        </div>

        {/* 🎯 Challenge Prompt */}
        <div className="scroll-section">
          <h3>🎯 Your Challenge:</h3>
          <p>
            If you had 5,000 sats, how much of a Bitcoin would that be?  
            Do the math — then imagine what 1 million sats would feel like.
          </p>
          <p className="scroll-tip">
            🧮 Hint: 100,000,000 sats = 1 BTC
          </p>
        </div>

        {/* 🏅 Badge */}
        <div className="scroll-section">
          <h3>🏅 Badge Unlocked: <em>Satoshi Signal – Scroll 005</em></h3>
          <p>
            ✨ You've discovered how value can live in the smallest spark.
            You're now ready to track, stack, and think in sats — a true skill of the next era.
          </p>
        </div>

        {/* 🚀 Tease */}
        <div className="scroll-section">
          <h3>🚀 You’ve Reached the Halfway Point</h3>
          <p>
            The first 5 Scrolls are complete. You’ve unlocked the basics of Bitcoin, AI, safety, value, and sats.
            From here, Bitsy will begin guiding you deeper into real-world use, wallets, and the NextArk Portal.
          </p>
        </div>

        {/* Back Link */}
        <div className="scroll-section">
          <p>
            <a href="/youth-scrolls/curriculum-scrolls" className="scroll-back-link">
              ⬅ Back to Curriculum Scrolls
            </a>
          </p>
        </div>
      </div>

      {/* 🧚 Bitsy */}
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

export default YouthScroll005;

