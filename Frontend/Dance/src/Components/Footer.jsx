import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section about">
          <h3 className="footer-title">NatyaSahitya</h3>
          <p className="footer-description">
            Exploring the rich heritage of Indian classical dance forms, providing resources for students, enthusiasts, and professionals.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
              <i className="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/dance-forms">Dance Forms</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h3 className="footer-title">Contact Us</h3>
          <p><i className="fa fa-map-marker"></i> Delhi, India</p>
          <p><i className="fa fa-phone"></i> +91 98765 43210</p>
          <p><i className="fa fa-envelope"></i> info@natyasahitya.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} NatyaSahitya | All Rights Reserved
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 