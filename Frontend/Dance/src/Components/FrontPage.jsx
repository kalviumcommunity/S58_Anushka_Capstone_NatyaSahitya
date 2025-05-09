import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import FeaturedSection from './FeaturedSection';
import Footer from './Footer';
import './Front.css';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  // Add scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const windowHeight = window.innerHeight;
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        // Loosen the threshold
        if (elementPosition < windowHeight) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    // Fallback: after 1s, force all .animate-on-scroll to be visible if not already
    const fallback = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        if (!el.classList.contains('animated')) {
          el.classList.add('animated');
        }
      });
    }, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(fallback);
    };
  }, []);
  
  return (
    <div className="front-page">
      <Navbar />
      <Hero />
      
      <section className="about-section animate-on-scroll">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About NatyaSahitya</h2>
              <div className="section-divider"></div>
              <p className="about-description">
                NatyaSahitya is a comprehensive platform dedicated to preserving and promoting the rich heritage of Indian classical dance forms. Our mission is to make these traditional art forms accessible to everyone through detailed lessons, historical context, and practical demonstrations.
              </p>
              <p className="about-description">
                Whether you're a beginner or an experienced dancer, our platform offers resources for all levels. Explore the theory behind each dance form, learn about their cultural significance, and master the techniques through our step-by-step practical guides.
              </p>
            </div>
            <div className="about-image-container">
              <div className="about-image"></div>
              <div className="about-image-decoration"></div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedSection />
      
      <section className="benefits-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title centered">Why Learn With Us</h2>
          <div className="section-divider centered"></div>
          
          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon comprehensive"></div>
              <h3 className="benefit-title">Comprehensive Learning</h3>
              <p className="benefit-description">
                Access both theoretical knowledge and practical demonstrations for a complete learning experience.
              </p>
            </div>
            
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon cultural"></div>
              <h3 className="benefit-title">Cultural Heritage</h3>
              <p className="benefit-description">
                Understand the rich cultural context and historical significance behind each dance form.
              </p>
            </div>
            
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon structured"></div>
              <h3 className="benefit-title">Structured Approach</h3>
              <p className="benefit-description">
                Follow our chapter-wise learning path designed for progressive skill development.
              </p>
            </div>
            
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon community"></div>
              <h3 className="benefit-title">Community Engagement</h3>
              <p className="benefit-description">
                Share your progress, post videos, and connect with fellow dance enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FrontPage;