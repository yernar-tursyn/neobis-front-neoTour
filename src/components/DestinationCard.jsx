import React from 'react';
import '../styles/destination-card.css';

const DestinationCard = ({ image, title }) => (
  <div className="destination-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default DestinationCard;
