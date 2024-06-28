// src/components/DestinationCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/destination-card.css';

const DestinationCard = ({ image, title, destinationPath }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(destinationPath);
  };

  return (
    <div className="destination-card" onClick={handleCardClick}>
      <div className="destination-card-img">
        <img src={image} alt={title} />
      </div>
      <div className="destination-card-title">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default DestinationCard;
