import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFound() {
  useEffect(() => { document.title = "Lost in the Ark – 404"; }, []);
  return (
    <>
      <main className="scroll-page parchment-wrapper">
        <h1>📜 Lost in the Ark</h1>
        <p>The scroll you seek drifted away or never existed.</p>
        <div style={{ marginTop: "1rem" }}>
          <Link className="cta" to="/">Return to Home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
