import React from 'react';
import DestinationCard from './DestinationCard'; 
import '../styles/popular-destinations.css';

const PopularDestinations = () => (
  <section className="popular-destinations">
    <DestinationCard image="/path/to/image1.jpg" title="Northern Mountain" />
    <DestinationCard image="/path/to/image2.jpg" title="Mount Fuji" />
    <DestinationCard image="/path/to/image3.jpg" title="Racek’s House" />
  </section>
);

export default PopularDestinations;
