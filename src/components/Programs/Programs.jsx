import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      {/* header */}
      <div className='programs__header'>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div className='programs__categories'>
        {programsData.map((program) => (
          <div className='programs__category'>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='programs__join-now'>
              <span>Join Now</span>
              <img src={RightArrow} alt='' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
