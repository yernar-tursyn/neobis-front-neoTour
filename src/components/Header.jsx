import React from 'react';
import '../styles/header.css';
import illustrationImage from '../assets/images/illustration.svg';

export const Header = () => (
  <div className='header-container'>
  <header className="header">
    <div className="header-promo">
        <h1>Winter Vacation Trips</h1>
        <p>Enjoy your winter vacations with warmth <br/> and amazing sightseeing on the mountains. <br/> Enjoy the best experience with us!</p>
        <button>Let's Go!</button>
    </div>
    <div className="illustration-img">
        <img src={illustrationImage} alt="illustration image" />
    </div>
  </header>
  </div>
);

export default Header;
