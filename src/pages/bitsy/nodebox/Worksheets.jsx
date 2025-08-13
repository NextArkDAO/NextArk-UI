import React, { useEffect } from "react";
import { setSEO } from "../../../utils/seo";

export default function Worksheets() {
  useEffect(() => {
    setSEO({
      title: "NodeBox • Worksheets",
      description: "Beginner worksheets for wallet setup, backups, and vault mapping.",
      canonical: "https://your-domain.com/bitsy/nodebox-vault/worksheets",
    });
  }, []);

  return (
    <main className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">
        <h1 className="scroll-title-glow">🔊 Sovereign Starter Worksheets</h1>
        <p>Placeholder content for Worksheets overview.</p>
      </div>
    </main>
  );
}
