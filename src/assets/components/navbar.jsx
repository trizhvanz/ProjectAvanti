
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="av-navbar">
      <NavLink to="/" className="av-nav-brand" onClick={closeMenu}>
        <span className="av-logo" aria-hidden="true">
          <svg viewBox="0 0 48 48">
            <ellipse className="av-logo-halo" cx="24" cy="3" rx="8" ry="2.5" />
            <path
              className="av-logo-heart"
              d="M24 44C19 40 5 29 5 20 5 10 18 7 24 17 30 7 43 10 43 20 43 29 29 40 24 44Z"
            />
          </svg>
        </span>
        <span className="av-nav-brand-text">
          <strong>Project Avanti</strong>
          <small>SHARE YOUR BLESSINGS</small>
        </span>
      </NavLink>

      <button
        className="av-menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav
        className={`av-nav-links ${menuOpen ? "av-nav-open" : ""}`}
        aria-label="Main navigation"
      >
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>
      </nav>
    </header>
  );
}
