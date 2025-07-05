import React from "react";

const SignalScroll = () => (
  <section className="scroll-page">
    <h1>🛰 Signal Scroll Archive</h1>
    <p>Weekly scroll drops for families, seekers, and sovereigns.</p>

    <div className="signal-subscribe">
      <a href="https://substack.com/@nextark?r=5o2nl5&utm_medium=ios" target="_blank" rel="noopener noreferrer" className="subscribe-btn">
        📡 Subscribe to Signal
      </a>
    </div>

    <div className="scroll-archive">
      <h2>📚 Past Scrolls</h2>
      <ul className="scroll-list">
        <li>Scroll #001: Wake the Ark</li>
        <li>Scroll #002: Signal of the Flame</li>
        <li>Scroll #003: Protect Your Sats</li>
      </ul>
    </div>

    <div className="signal-info">
      <p><strong>New scrolls every Sunday.</strong><br />
      Midweek nudges from Quillshade.</p>
    </div>
  </section>
);

// Add signal styles
const signalStyles = `
.signal-subscribe {
  text-align: center;
  margin: 2rem 0;
}

.subscribe-btn {
  display: inline-block;
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, #00ffe7, #ff6b6b);
  color: #0a0a0a;
  text-decoration: none;
  font-weight: 900;
  font-size: 1.2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 255, 231, 0.3);
}

.subscribe-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 255, 231, 0.5);
}

.scroll-archive {
  margin: 3rem 0;
}

.signal-info {
  text-align: center;
  font-size: 1.1rem;
  color: #b8b8ff;
  margin: 2rem 0;
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = signalStyles;
  document.head.appendChild(styleSheet);
}

export default SignalScroll;