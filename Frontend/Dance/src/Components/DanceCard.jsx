import React from 'react';
import { Link } from 'react-router-dom';
import './DanceCard.css';

const DanceCard = ({ title, image, description, link, delay = 0 }) => {
  // fallback image in case the placeholder fails
  const fallback = 'https://via.placeholder.com/600x400/cccccc/333333?text=Image+Not+Found';
  const [imgSrc, setImgSrc] = React.useState(image);

  return (
    <div 
      className="dance-card hover-grow" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="dance-card-image-container">
        <img 
          src={imgSrc} 
          alt={title} 
          className="dance-card-image" 
          onError={() => setImgSrc(fallback)}
          draggable="false"
        />
      </div>
      <div className="dance-card-content">
        <h3 className="dance-card-title">{title}</h3>
        <div className="dance-card-divider"></div>
        <p className="dance-card-description">{description}</p>
        <Link to={link} className="dance-card-button">
          Explore
          <span className="dance-card-button-arrow">→</span>
        </Link>
      </div>
      <div className="dance-card-decoration"></div>
    </div>
  );
};

export default DanceCard; 