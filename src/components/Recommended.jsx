import React from 'react';
import '../styles/recommended.css';
import DestinationCard from './DestinationCard';

const Recommended = () => (
  <section className="recommended">
    {[...Array(12)].map((_, index) => (
      <DestinationCard key={index} image="path/to/image.jpg" title="Greenough, Montana" />
    ))}
  </section>
);

export default Recommended;
