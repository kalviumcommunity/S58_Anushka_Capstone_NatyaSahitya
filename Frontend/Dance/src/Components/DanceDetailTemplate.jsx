import React from 'react';
import './DanceDetailTemplate.css';

const DanceDetailTemplate = ({ 
  title, 
  introText, 
  historyText, 
  elements, 
  gharanas, 
  costumeText, 
  personalities,
  backgroundImage
}) => {
  return (
    <div className="dance-detail-container">
      <div className="dance-detail-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="dance-detail-overlay"></div>
        <h1 className="dance-detail-title">{title}</h1>
      </div>

      <div className="dance-detail-main">
        <div className="dance-detail-content">
          <div className="dance-detail-section">
            <h2 className="dance-detail-heading">Introduction</h2>
            <div className="dance-detail-text">{introText}</div>
          </div>
          
          <div className="dance-detail-section">
            <h2 className="dance-detail-heading">History</h2>
            <div className="dance-detail-text">{historyText}</div>
          </div>
          
          <div className="dance-detail-section">
            <h2 className="dance-detail-heading">Elements</h2>
            <ul className="dance-detail-list">
              {elements.map((element, index) => (
                <li key={index}>
                  <a href={element.link}>{element.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="dance-detail-section">
            <h2 className="dance-detail-heading">Major Gharanas</h2>
            <ul className="dance-detail-list">
              {gharanas.map((gharana, index) => (
                <li key={index}>
                  <a href={gharana.link}>{gharana.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="dance-detail-section">
            <h2 className="dance-detail-heading">Costume and Jewelry</h2>
            <div className="dance-detail-text">{costumeText}</div>
          </div>
          
          <div className="dance-detail-section">
            <h2 className="dance-detail-heading">Famous Personalities</h2>
            <ul className="dance-detail-list">
              {personalities.map((person, index) => (
                <li key={index}>
                  <a href={person.link}>{person.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="dance-detail-sidebar">
          <div className="dance-detail-nav">
            <h3>Quick Navigation</h3>
            <button onClick={() => document.querySelectorAll('.dance-detail-heading')[0].scrollIntoView({ behavior: 'smooth' })}>
              Introduction
            </button>
            <button onClick={() => document.querySelectorAll('.dance-detail-heading')[1].scrollIntoView({ behavior: 'smooth' })}>
              History
            </button>
            <button onClick={() => document.querySelectorAll('.dance-detail-heading')[2].scrollIntoView({ behavior: 'smooth' })}>
              Elements
            </button>
            <button onClick={() => document.querySelectorAll('.dance-detail-heading')[3].scrollIntoView({ behavior: 'smooth' })}>
              Gharanas
            </button>
            <button onClick={() => document.querySelectorAll('.dance-detail-heading')[4].scrollIntoView({ behavior: 'smooth' })}>
              Costume
            </button>
            <button onClick={() => document.querySelectorAll('.dance-detail-heading')[5].scrollIntoView({ behavior: 'smooth' })}>
              Personalities
            </button>
          </div>
        </div>
      </div>
      
      <div className="dance-detail-footer">
        <div className="dance-detail-author">
          <div className="dance-detail-author-image"></div>
          <div className="dance-detail-author-name">Anushka Bhatt</div>
        </div>
        <div className="dance-detail-share">
          <span>Share:</span>
          <a href="#" className="dance-detail-share-btn">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="dance-detail-share-btn">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="dance-detail-share-btn">
            <i className="fa fa-youtube-play"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DanceDetailTemplate; 