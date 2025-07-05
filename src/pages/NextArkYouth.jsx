import React from "react";
import Lottie from 'lottie-react';
import bitsyAnim from "../assets/bitsy-lottie.json";

const NextArkYouth = () => (
  <section className="scroll-page">
    <h1>
      👧🏾🧠 <span className="glow">NextArk Youth</span>
    </h1>

    <div className="bitsy-container">
      <Lottie 
        animationData={bitsyAnim} 
        loop={true} 
        style={{ width: 250, height: 250 }} 
      />
    </div>

    <p className="subtitle">Learn. Stack. Lead.</p>

    <div className="youth-intro">
      <p>
        Meet <strong className="bitsy-name">Bitsy</strong> – our guide to the future of money and AI.<br />
        Built for kids, families, and young sovereigns.
      </p>
    </div>

    <ul className="scroll-list">
      <li>📜 Curriculum Modules (Scroll Format)</li>
      <li>🎯 Bitsy's Bitcoin Challenge</li>
      <li>👨‍👩‍👧 Parent Companion Guides</li>
      <li>📥 Downloadable PDFs</li>
      <li>🧰 Youth Vault Kits (NodeBox)</li>
      <li>🌐 <a href="#bitsy-scroll" className="bitsy-link">Visit Bitsy's World →</a></li>
    </ul>

    <blockquote className="quote">
      “Learning sovereignty should be fun, not scary.”
    </blockquote>
  </section>
);

export default NextArkYouth;
