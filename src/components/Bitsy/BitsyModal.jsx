import React, { useEffect, useState } from "react";
import "./BitsyModal.css";

function BitsyModal({ onClose, responseText }) {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (responseText && !isMuted) {
      const utterance = new SpeechSynthesisUtterance(responseText);
      utterance.lang = "en-US";
      utterance.pitch = 1.1;
      utterance.rate = 0.95;
      utterance.volume = 1;
      utterance.voice =
        speechSynthesis.getVoices().find((v) =>
          v.name.includes("Google") || v.name.includes("Samantha")
        ) || null;

      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
  }, [responseText, isMuted]);

  const handleSpeak = (text) => {
    if (isMuted) return;
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.pitch = 1.05;
    utter.rate = 0.95;
    utter.volume = 1;
    speechSynthesis.speak(utter);
  };

  const toggleMute = () => {
    speechSynthesis.cancel();
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="bitsy-overlay" onClick={onClose}>
      <div className="bitsy-modal" onClick={(e) => e.stopPropagation()}>
        <button className="bitsy-close" onClick={onClose}>
          ✖
        </button>
        <button className="bitsy-toggle" onClick={toggleMute}>
          {isMuted ? "🔇 Mute" : "🔊 Speak"}
        </button>

        <div className="modal-intro">
          🌟 Hey there! I’m <strong>Bitsy</strong>.<br />Tap a scroll to learn:
        </div>

        <ul className="modal-list">
          <li onClick={() => handleSpeak("Bitcoin is digital money you control. No banks. No middlemen. Just freedom.")}>💰 What is Bitcoin?</li>
          <li onClick={() => handleSpeak("To protect your crypto, use a cold wallet. Never share your seed phrase.")}>🛡️ How do I protect my crypto?</li>
          <li onClick={() => handleSpeak("A cold wallet is a secure vault. It keeps your Bitcoin offline and safe.")}>🔒 What’s a cold wallet?</li>
        </ul>

        <div className="modal-footer">✨ Click anywhere outside to close.</div>
      </div>
    </div>
  );
}

export default BitsyModal;
