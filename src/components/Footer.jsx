import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-scroll">
      <div className="footer-content">
        <p className="footer-line">© {new Date().getFullYear()} NextArk DAO. All Rights Reserved.</p>
        <p className="footer-line">Built for the next generation of sovereigns.</p>
        <p className="footer-line">
          Privacy First · Decentralized by Design · Powered by Code + Courage
        </p>
        <p className="footer-link">
          <a
            href="https://nextarkdao.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Ark
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
