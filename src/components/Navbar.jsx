import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';
import { personalData } from '../data/personal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="nav-brand" aria-label="Gowshic - Home">
          <Code2 className="nav-brand-icon" size={20} strokeWidth={2.2} />
          <span className="nav-brand-name">GOWSHIC</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="desktop-nav">
          <ul className="nav-links-desktop">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#achievements">Achievements</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education &amp; Certs</a>
            </li>
            <li>
              <a href="#contact" className="nav-cta-btn">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <a href="#about" onClick={closeMobileMenu}>
          About Me
        </a>
        <a href="#achievements" onClick={closeMobileMenu}>
          Achievements &amp; Leadership
        </a>
        <a href="#skills" onClick={closeMobileMenu}>
          Technical Skills
        </a>
        <a href="#projects" onClick={closeMobileMenu}>
          Featured Projects
        </a>
        <a href="#education" onClick={closeMobileMenu}>
          Education &amp; Certificates
        </a>
        <a href="#contact" onClick={closeMobileMenu} className="mobile-cta-link">
          Get In Touch ✉
        </a>
      </div>
    </header>
  );
}
