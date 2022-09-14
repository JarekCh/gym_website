import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className='Join' id='join-us'>
      <div className='join__left'>
        <hr />
        <div>
          <span className='stroke-text'>ready to</span>
          <span> level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className='stroke-text'>with us?</span>
        </div>
      </div>
      <div className='join__right'>
        <form action='' className='join__email-container'>
          <input
            type='email'
            name='user_email'
            placeholder='Enter your Email here..'
          />
          <button className='btn join__btn'>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
