// src/components/DestinationCard.jsx
import React from 'react';
import '../styles/destination-card.css';

const DestinationCard = ({ image, title }) => (
  <div className="destination-card">
    <div className="destination-card-img">
      <img src={image} alt={title} />
    </div>
    <div className="destination-card-title">
      <h4>{title}</h4>
    </div>
  </div>
);

export default DestinationCard;
