import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <img className='header__logo' src={logo} alt='logo' />

      <ul className='header__menu'>
        <li>Home</li>
        <li>Progrmas</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
