import React from "react";
import Bitsy from "./Bitsy";

const NodeBoxPreview = () => (
  <div className="nodebox-teaser">
    <h2>🧰 What’s in the NodeBox?</h2>
    <p>
      The <strong>NextArk NodeBox</strong> is a sovereignty starter kit — built for families, guardians, and rising builders. Each box includes:
    </p>
    <ul className="scroll-list">
      <li>🔥 Tangem Cold Wallet (or Ledger variant)</li>
      <li>🪙 Bitcoin Seed Phrase Capsule (metal)</li>
      <li>📜 Printed Curriculum Scrolls</li>
      <li>🧠 Bitsy Stickers + Cards</li>
      <li>🔐 Sovereignty Setup Guide</li>
      <li>🎁 Surprise Ark Relic</li>
    </ul>
    <p>
      Launching soon. You can preclaim your box or become a scroll guardian below.
    </p>

    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <Bitsy useLottie={false} small />
    </div>
  </div>
);

export default NodeBoxPreview;
