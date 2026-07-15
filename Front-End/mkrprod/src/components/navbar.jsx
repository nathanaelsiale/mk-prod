import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">MK-Prod</h1>

        <div className="links">
          {isHome ? (
            <>
              <a href="#home">Accueil</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </>
          ) : (
            <>
              <Link to="/">Accueil</Link>
              <Link to="/#portfolio">Portfolio</Link>
              <Link to="/#contact">Contact</Link>
            </>
          )}
          
          <Link to="/gallery">Galerie</Link>
        </div>

        <div className="menu-btn" onClick={() => setOpen(!open)}>☰</div>
      </div>

      {open && (
        <div className="mobile-menu">
          {isHome ? (
            <>
              <a href="#home" onClick={() => setOpen(false)}>Accueil</a>
              <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </>
          ) : (
            <>
              <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
              <Link to="/#portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
              <Link to="/#contact" onClick={() => setOpen(false)}>Contact</Link>
            </>
          )}

          <Link to="/gallery" onClick={() => setOpen(false)}>Galerie</Link>
        </div>
      )}
    </nav>
  );
}