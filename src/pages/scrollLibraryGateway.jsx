// /src/pages/ScrollLibraryGateway.jsx — CPR v3
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ScrollLibraryGateway.css";
import { setSEO } from "../utils/seo";

const ScrollLibraryGateway = () => {
  const navigate = useNavigate();

  // 🔎 SEO
  useEffect(() => {
    setSEO({
      title: "The Scroll Library — NextArk",
      description:
        "A growing collection of sovereign lessons, truth drops, and Signal Scrolls.",
      canonical: "https://your-domain.com/scroll-library",
      og: { image: "/og/scroll-library.jpg" },
    });
  }, []);

  const scrolls = [
    { title: "📜 Stack the Future", subtitle: "(Bitcoin Intro)", path: "/scrolls/bitcoin-intro" },
    { title: "🛡️ Protect Your Sats", subtitle: "(Cold Wallet Safety)", path: "/scrolls/wallet-safety" },
    { title: "🌑 The Hood & The Halo", subtitle: "(Quillshade Reveal)", path: "/scrolls/quillshade-reveal" },
    { title: "🔁 Legacy Loop", subtitle: "(Inheritance & Purpose)", path: "/scrolls/inheritance-purpose" },
    { title: "📬 Signal Archives", subtitle: "(Substack)", path: "https://substack.com/@nextark" },
  ];

  const handleNavigate = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      navigate(path);
    }
  };

  return (
    <main className="scroll-page library-bg">
      <div className="scroll-library-gateway" role="region" aria-labelledby="libraryTitle">
        <h1 id="libraryTitle" className="scroll-header">📚 The Scroll Library</h1>
        <p className="scroll-description">
          A growing collection of sovereign lessons, truth drops, and Signal Scrolls.
        </p>

        <ul className="scroll-buttons" role="list" aria-label="Available scrolls">
          {scrolls.map((scroll) => (
            <li key={scroll.title}>
              <button
                className="neon-scroll-button"
                onClick={() => handleNavigate(scroll.path)}
                aria-label={`${scroll.title} ${scroll.subtitle}`}
              >
                <div className="button-text-block">
                  <span className="scroll-main-text">{scroll.title}</span>
                  <span className="scroll-subtext">{scroll.subtitle}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <p className="scroll-footer">
          <span className="glow-quote">"</span> Want to publish your own scroll? Join the DAO.{" "}
          <span className="glow-quote">"</span>
        </p>
      </div>
    </main>
  );
};

export default ScrollLibraryGateway;
