import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.navigationWrapper}>
        <a href='' role='img' aria-label='shortly'>
          <img alt='Shortly logo' src='/src/assets/logo.svg' />
        </a>
        <nav>
          <ul>
            <li>
              <a className='link header__link' href=''>
                Features
              </a>
            </li>
            <li>
              <a className='link header__link' href=''>
                Pricing
              </a>
            </li>
            <li>
              <a className='link header__link' href=''>
                Resources
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.buttons}>
        <button className='button transparent'>Login</button>
        <button className='button basic'>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
