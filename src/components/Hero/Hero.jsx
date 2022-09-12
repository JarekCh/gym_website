import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__left-h'>
        <Header />
        {/* the best ad */}
        <div className='hero__the-best-add'>
          <div></div>
          <span>the best fitnes club in the town</span>
        </div>
        {/* hero heading */}
        <div className='hero__text'>
          <div>
            <span>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
        </div>
      </div>
      <div className='hero__right-h'>right side</div>
    </div>
  );
};

export default Hero;
