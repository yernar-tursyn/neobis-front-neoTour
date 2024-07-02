import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/destination-page.css';
import { ArrowBack } from '../assets/icons/svg/ArrowBack';

const DestinationPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://muha-backender.org.kg/retrieve-tour/${id}/`)
      .then(response => response.json())
      .then(data => setDestination(data))
      .catch(error => console.error('Error fetching destination data:', error));
  }, [id]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div className="destination-container">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowBack />
        Go back
      </button>
      <img src={destination.thumbnail} alt={destination.name} className="destination-image" />
      <div className="destination-info">
        <h1>{destination.name}</h1>
        <p className="location">{destination.location}</p>
        <div className="description">
          <h2>Description</h2>
          <p>{destination.description}</p>
        </div>
        <div className="reviews">
          <h2>Reviews</h2>
          {destination.reviews.map((review, index) => (
            <div key={index} className="review">
              <p className="review-author">{review.reviewer_name}</p>
              <img src={review.reviewer_photo} alt="Reviewer" className="reviewer-photo" />
              <p>{review.review_text}</p>
            </div>
          ))}
        </div>
        <button className="book-button">Book now</button>
      </div>
    </div>
  );
};

export default DestinationPage;
