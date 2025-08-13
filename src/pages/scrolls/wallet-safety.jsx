// src/pages/scrolls/WalletSafety.jsx
import React from "react";
import Footer from "../../components/Footer";
import "../../App.css";

const WalletSafety = () => {
  return (
    <section className="scroll-page library-bg">
      <div className="center-layout">
        <div className="scroll-container parchment-bg">
          <h1 className="scroll-title-glow">🔐 Wallet Safety Protocol</h1>
          <p className="subtitle">Guard your keys. Guard your future.</p>

          <div className="three-dot-divider">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>

          <div className="scroll-section">
            <p>Your wallet is your vault — the sacred key to your future. Protect it with these core sovereign practices:</p>
            <p>1️⃣ <strong>Never share your seed phrase.</strong><br />If someone has it, they have everything.</p>
            <p>2️⃣ <strong>Cold storage is your fortress.</strong><br />Use Trezor, Ledger, Tangem, or Keystone to keep assets offline and unreachable by hackers.</p>
            <p>3️⃣ <strong>Write it. Don’t screenshot it.</strong><br />Digital photos can be compromised. Handwritten backups in safe locations are stronger.</p>
            <p>4️⃣ <strong>Test transactions = smart practice.</strong><br />Send a small amount first to verify addresses before deploying large amounts.</p>
            <p>5️⃣ <strong>Backups are everything.</strong><br />Keep at least two secure backups stored in separate physical locations.</p>
            <p>If your keys are safe, your sovereignty is secure. Guard it like the Ark depends on it — because it does.</p>
          </div>

          <blockquote>“Keys in your hand, future in your command.”</blockquote>

          <div className="scroll-section">
            <a href="/scroll-library" className="scroll-back-link">⬅ Back to Scroll Library</a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default WalletSafety;
