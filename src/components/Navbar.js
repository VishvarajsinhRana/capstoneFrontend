import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            Trip Advisor
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/serviceProvider' className='nav-links' onClick={closeMobileMenu}>
                Service
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
                Reviews
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/favourites' className='nav-links' onClick={closeMobileMenu}>
                Favourites
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign Up/Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;