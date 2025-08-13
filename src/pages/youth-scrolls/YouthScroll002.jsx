import React from "react";
import "../../App.css";
import Footer from "../../components/Footer";
import BitsyFloating from "../../assets/bitsy/bitsy_floating_v1.gif";

const YouthScroll002 = () => {
  return (
    <section className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">

        {/* 🔮 Title */}
        <h1 className="scroll-title-glow">📜 Youth Scroll 002 – AI & You</h1>
        <h2 className="subtitle">Understanding the brain behind the screen.</h2>

        {/* ✨ Bitsy Intro */}
        <div className="bitsy-speech">
          <p>🤖 I’m Bitsy — a friendly AI scrollkeeper! But what *is* AI, really?</p>
          <p>In this scroll, we’ll uncover what makes AI smart, and how *you* stay in charge.</p>
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
            <li>🤔 What is Artificial Intelligence?</li>
            <li>🧠 How does AI learn?</li>
            <li>🕹️ Why *you* are always the captain</li>
            <li>🌟 How to use AI for creativity and questions</li>
          </ul>
        </div>

        {/* 🎯 Challenge Prompt */}
        <div className="scroll-section">
          <h3>🎯 Your Challenge:</h3>
          <p>
            Write a question you'd ask an AI like Bitsy.  
            Then, write what kind of *helper* you’d want to build in the future using AI.
          </p>
          <p className="scroll-tip">
            🛠 Example: “I’d build an AI that helps kids learn how to draw comics.”
          </p>
        </div>

        {/* 🎖️ Badge */}
        <div className="scroll-section">
          <h3>🏅 Badge Unlocked: <em>Prompt Initiate – Speaker of the Machine</em></h3>
          <p>✨ You’ve started learning how to speak to AI. That’s rare and powerful.</p>
          <p>In the future, scrollkeepers like you will guide entire digital realms.</p>
        </div>

        {/* 🚀 Next Scroll Tease */}
        <div className="scroll-section">
          <h3>🚀 Next Mission Preview</h3>
          <p>
            In Scroll 003, we’ll dive into *how to keep your treasure safe* using seed phrases and secret codes.
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

export default YouthScroll002;
