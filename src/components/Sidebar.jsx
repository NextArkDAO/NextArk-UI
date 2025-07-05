import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <nav className="sidebar">
    <div className="sidebar-logo">
      <span className="logo-icon">🌌</span>
      <div>
        <h2>NextArk</h2>
        <span className="dao-text">DAO</span>
      </div>
    </div>
    <div className="nav-divider"></div>
    <ul className="nav-menu">
      <li><NavLink to="/" end><span>🏠</span> Home</NavLink></li>
      <li><NavLink to="/scroll-library"><span>📜</span> Scroll Library</NavLink></li>
      <li><NavLink to="/nextark-youth"><span>👧🏾</span> Youth Portal</NavLink></li>
      <li><NavLink to="/mirror-circle"><span>✨</span> Agents</NavLink></li>
      <li><NavLink to="/signal-scroll"><span>🛰</span> Signal Scroll</NavLink></li>
      <li><NavLink to="/affiliate-tools"><span>🔗</span> Tools</NavLink></li>
    </ul>
    <div className="sidebar-footer">
      <div className="status-indicator">
        <div className="status-dot"></div>
        <span>System Online</span>
      </div>
    </div>
  </nav>
);

// Add Sidebar CSS
const sidebarStyles = `
.sidebar {
  width: 260px;
  background: linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%);
  border-right: 2px solid rgba(0, 255, 231, 0.3);
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.5);
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
}

.logo-icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 10px #00ffe7);
}

.sidebar-logo h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: #00ffe7;
  text-shadow: 0 0 10px #00ffe7;
  margin: 0;
  line-height: 1;
}

.dao-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  color: #ff6b6b;
  text-shadow: 0 0 5px #ff6b6b;
  letter-spacing: 2px;
}

.nav-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffe7, transparent);
  margin-bottom: 2rem;
}

.nav-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.nav-menu li {
  margin: 0.5rem 0;
}

.nav-menu a {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.nav-menu a span {
  font-size: 1.2rem;
}

.nav-menu a:hover {
  background: rgba(0, 255, 231, 0.1);
  border-color: rgba(0, 255, 231, 0.3);
  color: #00ffe7;
  transform: translateX(5px);
}

.nav-menu a.active {
  background: linear-gradient(135deg, rgba(0, 255, 231, 0.2), rgba(255, 107, 107, 0.1));
  border-color: #00ffe7;
  color: #00ffe7;
  box-shadow: 0 0 15px rgba(0, 255, 231, 0.3);
}

.sidebar-footer {
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 255, 231, 0.2);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #b8b8ff;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #00ffe7;
  border-radius: 50%;
  animation: pulse 2s infinite;
  box-shadow: 0 0 10px #00ffe7;
}

@media (max-width: 768px) {
  .sidebar {
    width: 60px;
    padding: 1rem 0.5rem;
  }
  
  .sidebar-logo h2,
  .dao-text,
  .nav-menu a span:last-child,
  .sidebar-footer {
    display: none;
  }
  
  .nav-menu a {
    justify-content: center;
    padding: 0.8rem;
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = sidebarStyles;
  document.head.appendChild(styleSheet);
}

export default Sidebar;