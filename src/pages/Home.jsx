import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section className="scroll-page">
    <div className="hero-section">
      <h1>🌌 NextArk DAO – The Ark is Rising</h1>
      <p className="subtitle">
        A new world needs new scrolls.<br />
        Future-ready education for youth, families, and freedom seekers.
      </p>
    </div>
    
    <div className="scroll-links">
      <Link to="/scroll-library" className="scroll-link">
        📜 Explore the Scroll Library
      </Link>
      <Link to="/nextark-youth" className="scroll-link">
        👧🏾🧠 Enter the Youth Portal
      </Link>
      <Link to="/mirror-circle" className="scroll-link">
        ✨ Meet Our Agents
      </Link>
      <Link to="/signal-scroll" className="scroll-link">
        🛰 Read the Signal Scroll
      </Link>
      <Link to="/affiliate-tools" className="scroll-link">
        🔗 Shop + Tools
      </Link>
    </div>
  </section>
);

export default Home;