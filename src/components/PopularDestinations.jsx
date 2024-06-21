import React from 'react';
import DestinationCard from './DestinationCard'; 
import '../styles/popular-destinations.css';

import image1 from '../assets/images/popular-img1.png';
import image2 from '../assets/images/popular-img2.jpg';
import image3 from '../assets/images/popular-img3.jpg';

const PopularDestinations = () => (
  <section className="popular-destinations">
    <DestinationCard image={image1} title="Northern Mountain" />
    <DestinationCard image={image2} title="Mount Fuji" />
    <DestinationCard image={image3} title="Racek’s House" />
  </section>
);

export default PopularDestinations;





