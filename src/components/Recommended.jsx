import React from 'react';
import '../styles/recommended.css';
import DestinationCard from './DestinationCard';

import imageReco from '../assets/images/recommended.jpg';

const Recommended = () => (
  <section className="recommended">
    {[...Array(12)].map((_, index) => (
      <DestinationCard key={index} image={imageReco} title="Greenough, Montana" />
    ))}
  </section>
);

export default Recommended;
