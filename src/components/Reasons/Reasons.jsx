import React from 'react';
import './Reasons.css';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import nb from '../../assets/nb.png';
import tick from '../../assets/tick.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className='reasons__left'>
        <img src={image1} alt='exercise example' />
        <img src={image2} alt='exercise example' />
        <img src={image3} alt='exercise example' />
        <img src={image4} alt='exercise example' />
      </div>
      <div className='reasons__right'></div>
    </div>
  );
};

export default Reasons;
