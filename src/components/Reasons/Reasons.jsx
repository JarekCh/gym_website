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
      <div className='reasons__right'>
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>why</span>
          <span> choose us?</span>
        </div>
        <div className='reasons__right-details'>
          <div>
            <img src={tick} alt=''></img>
            <span>over 140+ expert coaches</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>train smarter and faster then before</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>reliable partners</span>
          </div>
        </div>
        <span>our partners</span>
        <div className='reasons__partners'>
          <img src={nb} alt='' />
          <img src={adidas} alt='' />
          <img src={nike} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
