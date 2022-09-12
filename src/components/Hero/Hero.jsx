import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__left-h'>
        <Header />
      </div>
      <div className='hero__right-h'>right side</div>
    </div>
  );
};

export default Hero;
