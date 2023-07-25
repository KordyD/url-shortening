import React from 'react';
import Button from '../../UI/Button/Button';
import Link from '../../UI/Link/Link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navigationWrapper}>
        <a href='#' role='img' aria-label='shortly'>
          <img alt='Shortly logo' src='/images/logo.svg' />
        </a>
        <nav>
          <ul>
            <li>
              <Link href='#'>Features</Link>
            </li>
            <li>
              <Link href='#'>Pricing</Link>
            </li>
            <li>
              <Link href='#'>Resources</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.buttons}>
        <Button type='login'>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
