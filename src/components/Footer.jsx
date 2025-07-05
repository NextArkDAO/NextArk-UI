import React from "react";

const Footer = () => (
  <footer className="scroll-footer">
    <div className="footer-content">
      <h2>🌐 Join the Ark Online</h2>
      <div className="footer-links">
        <a href="https://www.instagram.com/dwayne_nextark" target="_blank" rel="noopener noreferrer">
          <span>📸</span> @dwayne_nextark
        </a>
        <a href="https://www.instagram.com/nextark_dao" target="_blank" rel="noopener noreferrer">
          <span>🏛️</span> @nextark_dao
        </a>
        <a href="https://www.instagram.com/quillshade.ai" target="_blank" rel="noopener noreferrer">
          <span>🖋️</span> @quillshade.ai
        </a>
        <a href="https://www.threads.com/@nextark_dao" target="_blank" rel="noopener noreferrer">
          <span>🧵</span> Threads
        </a>
        <a href="https://www.tiktok.com/@nextark.dao" target="_blank" rel="noopener noreferrer">
          <span>🎵</span> TikTok
        </a>
        <a href="https://x.com/quillshade_ark" target="_blank" rel="noopener noreferrer">
          <span>🐦</span> X (Twitter)
        </a>
        <a href="https://substack.com/@nextark" target="_blank" rel="noopener noreferrer">
          <span>📰</span> Substack
        </a>
      </div>
      <div className="footer-tagline">
        <p>Built by <span className="highlight">Cipher</span>. Guided by the <span className="highlight">Flame</span>.</p>
      </div>
    </div>
  </footer>
);

// Footer styles
const footerStyles = `
.scroll-footer {
  margin-top: 4rem;
  padding: 3rem 0 2rem 0;
  border-top: 2px solid rgba(0, 255, 231, 0.3);
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(10, 10, 10, 0.9));
  backdrop-filter: blur(10px);
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.scroll-footer h2 {
  font-family: 'Orbitron', sans-serif;
  color: #00ffe7;
  text-shadow: 0 0 10px #00ffe7;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.footer-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 231, 0.2);
  border-radius: 8px;
  color: #b8b8ff;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  background: rgba(0, 255, 231, 0.1);
  border-color: #00ffe7;
  color: #00ffe7;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 231, 0.2);
}

.footer-tagline {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 255, 231, 0.2);
}

.footer-tagline p {
  font-size: 1.1rem;
  color: #b8b8ff;
  margin: 0;
}

.highlight {
  color: #ff6b6b;
  text-shadow: 0 0 5px #ff6b6b;
  font-weight: bold;
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = footerStyles;
  document.head.appendChild(styleSheet);
}

export default Footer;