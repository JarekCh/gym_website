import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_img from '../../assets/hero_image.png';
import hero_img_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

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
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* experience figures */}
        <div className='hero__figures'>
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitens programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className='hero__btns'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Lern More</button>
        </div>
      </div>
      <div className='hero__right-h'>
        <button className='btn'>Join Now</button>
        <div className='hero__heart-rate'>
          <img src={Heart} alt='heart rate' />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero imgs */}
        <img src={hero_img} alt='' className='hero__img' />
        <img src={hero_img_back} alt='' className='hero__img-back' />

        {/* calories */}
        <div className='hero__calories'>
          <img src={Calories} alt='' />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
