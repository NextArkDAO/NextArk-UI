import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => (
  <nav className="sidebar">
    <div className="sidebar-logo fade-in">
      <span className="logo-icon" aria-label="Cosmic Logo">🌌</span>
      <div>
        <h2 className="logo-text">NextArk</h2>
        <span className="dao-text">DAO</span>
      </div>
    </div>

    <div className="nav-divider glow-divider"></div>

    <ul className="nav-menu">
      {[
        { path: "/", label: "Home", icon: "🏠" },
        { path: "/scroll-library", label: "Scroll Library", icon: "📜" },
        { path: "/nextark-youth", label: "Youth Portal", icon: "🧠" },
        { path: "/mirror-circle", label: "Agents", icon: "✨" },
        { path: "/signal-scroll", label: "Signal Scroll", icon: "🛰" },
        { path: "/affiliate-tools", label: "Tools", icon: "🔗" },
        { path: "/bitsys-world", label: "Bitsy’s World", icon: "🖌️" },
      ].map(({ path, label, icon }) => (
        <li key={path}>
          <NavLink
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            aria-label={label}
          >
            <span>{icon}</span> {label}
          </NavLink>
        </li>
      ))}
    </ul>

    <div className="sidebar-footer fade-in">
      <div className="status-indicator">
        <div className="status-dot"></div>
        <span>System Online</span>
      </div>
    </div>
  </nav>
);

export default Sidebar;
