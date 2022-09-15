import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

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
          <li>
            <Link
              onClick={isMenuOpend}
              to='hero'
              span={true}
              smooth={true}
              activeClass='active'
            >
              Home
            </Link>
          </li>
          <li>
            <Link onClick={isMenuOpend} to='programs' span={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={isMenuOpend} to='reasons' span={true} smooth={true}>
              Why Us
            </Link>
          </li>
          <li>
            <Link onClick={isMenuOpend} to='plans' span={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={isMenuOpend}
              to='testimonials'
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
