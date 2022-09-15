import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_img from '../../assets/hero_image.png';
import hero_img_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';

import { motion } from 'framer-motion';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero'>
      <div className='blur hero__blur'></div>
      <div className='hero__left-h'>
        <Header />
        {/* the best ad */}
        <div className='hero__the-best-add'>
          <motion.div
            initial={{ left: mobile ? '178px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
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
            <span>
              <NumberCounter start={100} end={140} delay={4} preFix='+' />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter start={800} end={978} delay={4} preFix='+' />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter start={0} end={50} delay={4} preFix='+' />
            </span>
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
        <motion.div
          className='hero__heart-rate'
          transition={transition}
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
        >
          <img src={Heart} alt='heart rate' />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero imgs */}
        <img src={hero_img} alt='' className='hero__img' />
        <motion.img
          src={hero_img_back}
          alt=''
          className='hero__img-back'
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
        />

        {/* calories */}
        <motion.div
          className='hero__calories'
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
        >
          <img src={Calories} alt='' />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
