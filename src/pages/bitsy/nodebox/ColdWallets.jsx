import React, { useEffect } from "react";
import { setSEO } from "../../../utils/seo";

export default function ColdWallets() {
  useEffect(() => {
    setSEO({
      title: "NodeBox • Cold Wallets",
      description: "Tangem, Trezor, Keystone — how they differ and when to use each.",
      canonical: "https://your-domain.com/bitsy/nodebox-vault/cold-wallets",
    });
  }, []);

  return (
    <main className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">
        <h1 className="scroll-title-glow">🔐 Cold Wallets</h1>
        <p className="subtitle">Tangem • Trezor • Keystone — choose by use-case, not hype.</p>
        <p>Placeholder content for Cold Wallets overview.</p>
      </div>
    </main>
  );
}
