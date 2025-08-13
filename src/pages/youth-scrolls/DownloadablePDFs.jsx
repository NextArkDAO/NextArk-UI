import React from "react";
import Footer from "../../components/Footer";
import "../../App.css";
import BitsyFloating from "../../assets/bitsy/bitsy_floating_v1.gif";

const DownloadablePDFs = () => {
  return (
    <section className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">

        {/* Title */}
        <h1 className="scroll-title-glow">📥 Downloadable PDFs</h1>
        <p className="subtitle">
          Printable versions of scrolls, missions, and companion activities.
        </p>

        <div className="three-dot-divider">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>

        {/* Bitsy Intro */}
        <div className="bitsy-speech">
          <p>📝 Want to keep a scroll in your hands? I’ve got you covered!</p>
          <p>
            You’ll be able to download and print any scroll or mission sheet from here — so you can
            learn and complete challenges offline.
          </p>
        </div>

        {/* Placeholder List */}
        <div className="scroll-section">
          <h3>📂 Available Downloads:</h3>
          <ul className="scroll-bullet-list">
            <li>📜 Youth Scroll 001 – Bitsy’s Bitcoin Challenge (PDF) – <em>Coming Soon</em></li>
            <li>🤖 Youth Scroll 002 – AI & You (PDF) – <em>Coming Soon</em></li>
            <li>🔐 Youth Scroll 003 – The Vault Code (PDF) – <em>Coming Soon</em></li>
            <li>🧠 Youth Scroll 004 – Sovereignty Starts Small (PDF) – <em>Coming Soon</em></li>
            <li>⚡ Youth Scroll 005 – Satoshi Signal (PDF) – <em>Coming Soon</em></li>
          </ul>
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

export default DownloadablePDFs;
