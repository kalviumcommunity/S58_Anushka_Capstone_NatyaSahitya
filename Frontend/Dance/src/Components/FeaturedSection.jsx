import React from 'react';
import DanceCard from './DanceCard';
import './FeaturedSection.css';

import kathakImage from '../assets/kathakbg-img.png';
import bharatanatyamImage from '../assets/BharatCostume.png';
import odissiImage from '../assets/OddisiCostume.png';
import kuchipudiImage from '../assets/KuchipudiCostume.png';

const FeaturedSection = () => {
  const featuredDances = [
    {
      title: 'Kathak',
      image: kathakImage,
      description: 'Kathak is one of the eight major forms of Indian classical dance, known for its rhythmic footwork, graceful movements, and expressive storytelling.',
      link: '/Kathak',
      delay: 0.1
    },
    {
      title: 'Bharatanatyam',
      image: bharatanatyamImage,
      description: 'Bharatanatyam is a major form of Indian classical dance that originated in Tamil Nadu. It is known for its fixed upper torso, bent legs and spectacular footwork.',
      link: '/Bharatanatyam',
      delay: 0.3
    },
    {
      title: 'Odissi',
      image: odissiImage,
      description: 'Odissi is a major ancient Indian classical dance that originated in the Hindu temples of Odisha. It is characterized by its tribhangi posture and mudras.',
      link: '/Odissi',
      delay: 0.5
    },
    {
      title: 'Kuchipudi',
      image: kuchipudiImage,
      description: 'Kuchipudi is a classical dance form from Andhra Pradesh, India. It is known for its graceful movements, strong narrative, and use of speech.',
      link: '/Kuchipudi',
      delay: 0.7
    }
  ];

  return (
    <section className="featured-section">
      <div className="featured-decoration left"></div>
      <div className="featured-decoration right"></div>
      
      <div className="container">
        <div className="featured-header">
          <h2 className="featured-title">Explore Classical Dance Forms</h2>
          <div className="featured-subtitle">Discover the rich heritage of Indian classical dance</div>
          <div className="featured-divider"></div>
        </div>
        
        <div className="featured-grid">
          {featuredDances.map((dance, index) => (
            <DanceCard
              key={index}
              title={dance.title}
              image={dance.image}
              description={dance.description}
              link={dance.link}
              delay={dance.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection; 