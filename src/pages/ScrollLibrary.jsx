// /src/pages/ScrollLibraryGateway.jsx — CPR v2
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ScrollLibraryGateway.css";

const ScrollLibraryGateway = () => {
  const navigate = useNavigate();

  const scrolls = [
    { title: "📜 Stack the Future", subtitle: "(Bitcoin Intro)", path: "/scrolls/bitcoin-intro" },
    { title: "🛡️ Protect Your Sats", subtitle: "(Cold Wallet Safety)", path: "/scrolls/wallet-safety" },
    { title: "🌑 The Hood & The Halo", subtitle: "(Quillshade Reveal)", path: "/scrolls/quillshade-reveal" },
    { title: "🔁 Legacy Loop", subtitle: "(Inheritance & Purpose)", path: "/scrolls/inheritance-purpose" },
    { title: "📬 Signal Archives", subtitle: "(Substack)", path: "https://substack.com/@nextark" },
  ];

  const handleNavigate = (path) => {
    if (path.startsWith("http")) window.open(path, "_blank");
    else navigate(path);
  };

  return (
    <main className="scroll-page library-bg">
      <div className="scroll-library-gateway">
        <h1 className="scroll-header">📚 The Scroll Library</h1>
        <p className="scroll-description">
          A growing collection of sovereign lessons, truth drops, and Signal Scrolls.
        </p>

        <div className="scroll-buttons">
          {scrolls.map((scroll, i) => (
            <button
              key={i}
              className="neon-scroll-button"
              onClick={() => handleNavigate(scroll.path)}
            >
              <div className="button-text-block">
                <span className="scroll-main-text">{scroll.title}</span>
                <span className="scroll-subtext">{scroll.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        <p className="scroll-footer">
          <span className="glow-quote">"</span> Want to publish your own scroll? Join the DAO.{" "}
          <span className="glow-quote">"</span>
        </p>
      </div>
    </main>
  );
};

export default ScrollLibraryGateway;
