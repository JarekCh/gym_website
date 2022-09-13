import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;

  return (
    <div className='Testimonials' id='testimonials'>
      <div className='testimonials__left'>
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: 'var(--orange)' }}>
            {testimonialsData[selected].name}
          </span>
          {` - ${testimonialsData[selected].status}`}
        </span>
      </div>
      <div className='testimonials__right'></div>
    </div>
  );
};

export default Testimonials;
