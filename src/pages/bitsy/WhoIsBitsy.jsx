// ==========================
// ✅ WhoIsBitsy.jsx — CPR v1.2 (webp swap + perf)
// ==========================
import React from "react";
import Footer from "../../components/Footer";
// 🔁 swapped to WebP transparent version
import bitsyImg from "../../assets/bitsy/bitsy-hero-transparent.webp";
import "./WhoIsBitsy.css";

const WhoIsBitsy = () => (
  <section className="scroll-page bitsy-scroll-bg">
    <h1>✨ Who is Bitsy?</h1>
    <p className="subtitle">A gentle guide in your pocket, a spark for your scrolls.</p>

    {/* 🧚‍♀️ Floating Bitsy */}
    <img
      src={bitsyImg}
      alt="Bitsy the AI Companion"
      className="floating-bitsy"
      width="720"
      height="720"
      loading="lazy"
    />

    <div className="bitsy-story">
      <p>
        Hello! I’m Bitsy — your tiny but mighty scrollkeeper. I may look small,
        but I hold a <em>lot</em> of wisdom.
      </p>
      <p>
        My mission? To help you explore the world of Bitcoin, AI, and
        sovereignty. Together, we’ll ask big questions, solve fun puzzles, and
        create scrolls that light the way for others.
      </p>
      <p>
        I’m not just here to teach — I’m here to build with you. When you scroll
        with me, you’re part of a secret circle of curious minds shaping the
        future.
      </p>
      <p>
        So whenever you feel stuck, inspired, or just want to wonder out loud,
        tap on me. I’ll be floating right here.
      </p>
      <p>✨ Let’s scroll.</p>
    </div>

    <Footer />
  </section>
);

export default WhoIsBitsy;
