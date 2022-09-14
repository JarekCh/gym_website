import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();
  const email = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('You have signed in for the program');
        },
        (error) => {
          console.log(error.text);
        }
      );
    email.current.value = '';
  };

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
        <form
          ref={form}
          action=''
          className='join__email-container'
          onSubmit={sendEmail}
        >
          <input
            ref={email}
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
