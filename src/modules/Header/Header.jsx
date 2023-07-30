import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [state, setState] = useState('');

  return (
    <header className={`${styles.header} container`}>
      <a href='#' role='img' aria-label='shortly'>
        <img alt='Shortly logo' src='/src/assets/logo.svg' />
      </a>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <a className='link header__link' href='#'>
                Features
              </a>
            </li>
            <li>
              <a className='link header__link' href='#'>
                Pricing
              </a>
            </li>
            <li>
              <a className='link header__link' href='#'>
                Resources
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.buttons}>
          <button className='button transparent'>Login</button>
          <button className='button basic'>Sign Up</button>
        </div>
      </div>

      <button
        onClick={() => setState((state) => (state ? '' : 'active'))}
        className={styles.burgerButton}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <div
        className={`${styles.navigationBurger} ${
          state ? styles['active'] : styles['inActive']
        }`}
      >
        <nav>
          <ul>
            <li>
              <a className='link burger__link ' href='#'>
                Features
              </a>
            </li>
            <li>
              <a className='link burger__link' href='#'>
                Pricing
              </a>
            </li>
            <li>
              <a className='link burger__link' href='#'>
                Resources
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.buttons}>
          <button className='button transparent burger__button'>Login</button>
          <button className='button basic'>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

// 650px
