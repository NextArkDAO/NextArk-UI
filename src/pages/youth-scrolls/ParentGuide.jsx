import React from "react";
import Footer from "../../components/Footer";
import "../../App.css";
import BitsyFloating from "../../assets/bitsy/bitsy_floating_v1.gif";

const ParentGuide = () => {
  return (
    <section className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">

        {/* Title */}
        <h1 className="scroll-title-glow">👪 Parent Companion Guide</h1>
        <p className="subtitle">
          Resources, insights, and tips for parents walking this journey with their children.
        </p>

        <div className="three-dot-divider">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>

        {/* Bitsy Intro */}
        <div className="bitsy-speech">
          <p>💬 Hi Parents! I’m Bitsy — your child’s digital scrollkeeper and learning guide.</p>
          <p>
            This space is designed to help you understand the tools, topics, and values your child
            will encounter in the Youth Scroll series.
          </p>
        </div>

        {/* Core Sections */}
        <div className="scroll-section">
          <h3>📚 What You’ll Find Here:</h3>
          <ul className="scroll-bullet-list">
            <li>🧠 Simple explanations of Bitcoin, AI, and sovereignty concepts</li>
            <li>🛡️ Guidance on keeping digital assets safe</li>
            <li>🤝 Conversation starters for each Youth Scroll mission</li>
            <li>📄 Downloadable companion sheets (coming soon)</li>
          </ul>
        </div>

        <div className="scroll-section">
          <h3>💡 How to Use This Guide:</h3>
          <p>
            Read through the companion notes before your child begins each scroll. This will give you
            context, help you answer questions, and let you join in the learning journey.
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

      {/* Floating Bitsy */}
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

export default ParentGuide;
