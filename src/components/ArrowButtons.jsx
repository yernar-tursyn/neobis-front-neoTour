import React from 'react';
import ArrowLeftIcon from '../assets/icons/svg/ArrowLeftIcon';
import ArrowRightIcon from '../assets/icons/svg/ArrowRightIcon';

export const ArrowButtons = ({ onPrevClick, onNextClick }) => (
  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '20px 0' }}>
    <button className='buttonStyle' onClick={onPrevClick}>
      <ArrowLeftIcon />
    </button>
    <button className='buttonStyle' onClick={onNextClick}>
      <ArrowRightIcon />
    </button>
  </div>
);
