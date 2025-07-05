import React from "react";

const AffiliateTools = () => (
  <section className="scroll-page">
    <h1>🔗 Tools of Sovereignty</h1>
    <p>Set up your sovereignty toolkit.</p>

    <div className="tools-section">
      <h2>🟧 Buy Bitcoin</h2>
      <a href="https://coinbase.com/join/5SBDC2J?src=ios-link" target="_blank" rel="noopener noreferrer" className="tool-link">
        <span>🏦</span> Coinbase
      </a>
    </div>

    <div className="tools-section">
      <h2>🟪 Exchange Power</h2>
      <a href="https://kraken.onelink.me/JDNW/8rxsyr94?code=zytdp33r" target="_blank" rel="noopener noreferrer" className="tool-link">
        <span>🐙</span> Kraken
      </a>
    </div>

    <div className="tools-section">
      <h2>🛡 Cold Storage</h2>
      <a href="https://tangem.com" target="_blank" rel="noopener noreferrer" className="tool-link">
        <span>💳</span> Tangem Wallets (Code: 3J6DCH)
      </a>
    </div>

    <blockquote>
      Support the mission by using our links – you stack, we grow.
    </blockquote>
  </section>
);

// Add tools styles
const toolsStyles = `
.tools-section {
  margin: 2rem 0;
}

.tool-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(0, 255, 231, 0.1), rgba(255, 107, 107, 0.1));
  border: 2px solid rgba(0, 255, 231, 0.3);
  border-radius: 10px;
  color: #00ffe7;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin: 0.5rem 0;
}

.tool-link:hover {
  border-color: #00ffe7;
  box-shadow: 0 0 20px rgba(0, 255, 231, 0.4);
  transform: translateY(-2px);
}

.tool-link span {
  font-size: 1.5rem;
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = toolsStyles;
  document.head.appendChild(styleSheet);
}

export default AffiliateTools;