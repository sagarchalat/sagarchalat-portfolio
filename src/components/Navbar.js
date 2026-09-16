import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`netflix-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="navbar-brand-group">
          <Link to="/" className="netflix-logo" onClick={closeMenu}>
            <span className="netflix-n">S</span>
            <span className="logo-name">SAGARCHALAT<span className="logo-ai">.AI</span></span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-links">
            <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/skills" className={`nav-item ${isActive('/skills') ? 'active' : ''}`}>
              Skills
            </Link>
            <Link to="/projects" className={`nav-item ${isActive('/projects') ? 'active' : ''}`}>
              Projects
            </Link>
            <Link to="/resume" className={`nav-item resume-nav-link ${isActive('/resume') ? 'active' : ''}`}>
              Resume <span className="nav-pulse-badge">PDF</span>
            </Link>
            <Link to="/contact" className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>
        </div>

        {/* Right Section: Resume CTA & Avatar */}
        <div className="navbar-actions">
          <a
            href={portfolioData.personal.resumeUrl}
            download="Sagar_S_AI-Eng.pdf"
            className="navbar-resume-btn"
            title="Direct Download PDF Resume"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>CV</span>
          </a>

          <Link to="/contact" className="avatar-wrapper" title="Sagar S - AI/ML Engineer Profile">
            <img src={profileImage} alt="Sagar S" className="navbar-avatar" />
            <span className="online-indicator"></span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <Link to="/" className={`mobile-nav-item ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/skills" className={`mobile-nav-item ${isActive('/skills') ? 'active' : ''}`} onClick={closeMenu}>
            Skills & Stack
          </Link>
          <Link to="/projects" className={`mobile-nav-item ${isActive('/projects') ? 'active' : ''}`} onClick={closeMenu}>
            Featured Projects
          </Link>
          <Link to="/resume" className={`mobile-nav-item resume-item ${isActive('/resume') ? 'active' : ''}`} onClick={closeMenu}>
            📄 View & Download Resume
          </Link>
          <Link to="/contact" className={`mobile-nav-item ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>
            Contact & Hire
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
