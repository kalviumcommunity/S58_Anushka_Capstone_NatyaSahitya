import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-part">Natya</span>
          <span className="title-part">Sahitya</span>
        </h1>
        <p className="hero-subtitle">Discover the Rich Heritage of Indian Classical Dance</p>
        <div className="hero-description">
          Explore the beauty, grace, and cultural significance of India's nine classical dance forms through comprehensive lessons, historical context, and practical demonstrations.
        </div>
        <div className="hero-buttons">
          <Link to="/SignUp" className="hero-button primary">
            Begin Your Journey
          </Link>
          <Link to="/Kathak" className="hero-button secondary">
            Explore Dance Forms
          </Link>
        </div>
      </div>
      
      <div className="hero-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Scroll to Explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
};

export default Hero; 