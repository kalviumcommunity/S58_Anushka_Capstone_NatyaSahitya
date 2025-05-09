import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">NatyaSahitya</span>
          <span className="logo-decoration"></span>
        </Link>

        <div className="navbar-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`menu-icon-bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className="navbar-item dropdown">
            <span className="navbar-link">Dance Forms</span>
            <div className="dropdown-content">
              <Link to="/Kathak" className="dropdown-item">Kathak</Link>
              <Link to="/Bharatanatyam" className="dropdown-item">Bharatanatyam</Link>
              <Link to="/Odissi" className="dropdown-item">Odissi</Link>
              <Link to="/Kuchipudi" className="dropdown-item">Kuchipudi</Link>
              <Link to="/Manipuri" className="dropdown-item">Manipuri</Link>
              <Link to="/Mohiniyattam" className="dropdown-item">Mohiniyattam</Link>
            </div>
          </li>
          <li className="navbar-item">
            <Link to="/about" className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="navbar-auth">
          <Link to="/Login" className="auth-link login">Login</Link>
          <Link to="/SignUp" className="auth-link signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 