import React from 'react';
import '../styles/header.css';
import illustrationImage from '../assets/images/illustration.svg';
import { ArrowPromo } from '../assets/icons/svg/ArrowPromo';
import ArrowLeftIcon from '../assets/icons/svg/ArrowLeftIcon';
import { ArrowButtons } from './ArrowButtons';

export const Header = () => {
  const handleScroll = (event) => {
    event.preventDefault();
    document.querySelector('.discover-slider').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className='header-container'>
      <header className="header">
        <div className="header-promo">
          <h1>Winter Vacation Trips</h1>
          <p>Enjoy your winter vacations with warmth <br /> and amazing sightseeing on the mountains. <br /> Enjoy the best experience with us!</p>
          <a className="lets-link" href="#discover-slider" onClick={handleScroll}>
            <h5>Let's Go!</h5>
            <ArrowPromo />
          </a>
        </div>
        <div className="illustration-img">
          <img src={illustrationImage} alt="illustration image" />
        </div>
      </header>
    </div>
  );
};

export default Header;
