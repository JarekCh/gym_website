import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import Link from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  const isMenuOpend = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <div className='header'>
      <img className='header__logo' src={logo} alt='logo' />
      {!menuOpened && mobile ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
          }}
          onClick={isMenuOpend}
        >
          <img
            src={Bars}
            alt=''
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>
      ) : (
        <ul className='header__menu'>
          <li onClick={isMenuOpend}>Home</li>
          <li onClick={isMenuOpend}>Progrmas</li>
          <li onClick={isMenuOpend}>Why Us</li>
          <li onClick={isMenuOpend}>Plans</li>
          <liv onClick={isMenuOpend}>Testimonials</liv>
        </ul>
      )}
    </div>
  );
};

export default Header;
