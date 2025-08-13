import React, { useEffect } from "react";
import { setSEO } from "../../../utils/seo";

export default function ScrollGuides() {
  useEffect(() => {
    setSEO({
      title: "NodeBox • Custom Scroll Guides",
      description: "Physical inserts + digital PDFs for setup, recovery, and family transfer.",
      canonical: "https://your-domain.com/bitsy/nodebox-vault/scroll-guides",
    });
  }, []);

  return (
    <main className="scroll-page youth-bg">
      <div className="scroll-container parchment-bg">
        <h1 className="scroll-title-glow">📜 Custom Scroll Guides</h1>
        <p>Placeholder content for Scroll Guides overview.</p>
      </div>
    </main>
  );
}
