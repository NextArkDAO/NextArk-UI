import React, { useEffect } from "react";
import { setSEO } from "../../../utils/seo";

export default function SeedVaults() {
  useEffect(() => {
    setSEO({
      title: "NodeBox • Metal Seed Vaults",
      description: "Fireproof recovery options, single vs multi-share setups.",
      canonical: "https://your-domain.com/bitsy/nodebox-vault/seed-vaults",
    });
  }, []);

  return (
    <main className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">
        <h1 className="scroll-title-glow">🔥 Metal Seed Vaults</h1>
        <p>Placeholder content for Seed Vaults overview.</p>
      </div>
    </main>
  );
}
