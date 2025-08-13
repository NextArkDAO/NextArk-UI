import React from "react";
import "../../App.css";
import Footer from "../../components/Footer";
import BitsyFloating from "../../assets/bitsy/bitsy_floating_v1.gif";

const YouthScroll003 = () => {
  return (
    <section className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">

        {/* 🔐 Title */}
        <h1 className="scroll-title-glow">📜 Youth Scroll 003 – The Vault Code</h1>
        <h2 className="subtitle">Protecting your treasure like a true sovereign.</h2>

        {/* ✨ Bitsy Intro */}
        <div className="bitsy-speech">
          <p>🧠 You’ve learned about Bitcoin and AI… now it’s time to protect what you own.</p>
          <p>Your vault begins with a code: a <strong>seed phrase</strong>. Never share it. Never lose it.</p>
        </div>

        <div className="three-dot-divider">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>

        {/* 🧠 Core Learnings */}
        <div className="scroll-section">
          <h3>🛡️ What You'll Learn:</h3>
          <ul className="scroll-bullet-list">
            <li>🔐 What is a wallet?</li>
            <li>📝 What is a seed phrase?</li>
            <li>🔥 Why you must write it down — not screenshot it</li>
            <li>🚫 Why you never share it (even with friends)</li>
          </ul>
        </div>

        {/* 🎯 Challenge Prompt */}
        <div className="scroll-section">
          <h3>🎯 Your Challenge:</h3>
          <p>
            Create a safe space in your room (like a box or folder) where you could keep your real-life seed phrase.  
            Then ask your scrollkeeper how they store *their* codes.
          </p>
          <p className="scroll-tip">
            💡 You’re not writing down your seed phrase now — but you’re building the habit.
          </p>
        </div>

        {/* 🎖️ Badge */}
        <div className="scroll-section">
          <h3>🏅 Badge Unlocked: <em>Vault Guardian – Keeper of the Code</em></h3>
          <p>✨ You now understand what protects a sovereign vault. Not a password — a phrase.</p>
        </div>

        {/* 🚀 Next Scroll Tease */}
        <div className="scroll-section">
          <h3>🚀 Next Mission Preview</h3>
          <p>
            In Scroll 004, we’ll compare Bitcoin to other kinds of money — and see what gives money its power.
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

export default YouthScroll003;
