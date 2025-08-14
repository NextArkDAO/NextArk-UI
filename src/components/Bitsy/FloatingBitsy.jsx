// ==========================
// ✅ FloatingBitsy.jsx – Ask Button Only (No Floating Image)
// ==========================
import React, { useState } from "react";
import "./FloatingBitsy.css";

const FloatingBitsy = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAskClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="ask-bitsy-btn-wrapper">
        <button className="ask-bitsy-button" onClick={handleAskClick}>
          💬 Ask Bitsy
        </button>
      </div>

      {showModal && (
        <div className="bitsy-modal-overlay" onClick={closeModal}>
          <div className="bitsy-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ❌
            </button>
            <div className="modal-content">
              <h2>Hi Friend! 🪄</h2>
              <p>
                I’m Bitsy, your scrollkeeper! Ready to help you learn about
                Bitcoin, AI, and how to protect your family’s future. 💫
              </p>
              <p>
                My full companion app is coming soon — until then, keep
                exploring these scrolls and stacking your skills!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingBitsy;
