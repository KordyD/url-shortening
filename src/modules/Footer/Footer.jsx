import React from 'react';
import styles from './Footer.module.scss';
import shortlyLogoWhite from '/src/assets/logo-white.svg';
const Footer = () => {
  return (
    <footer className={styles.footerBackground}>
      <div className={`${styles.footer} container`}>
        <a href='#' role='img' aria-label='shortly'>
          <img alt='Shortly logo' src={shortlyLogoWhite} />
        </a>

        <div className={styles.linksWrapper}>
          <div>
            <h3>Features</h3>
            <ul>
              <li>
                <a className='link footer__link' href='#'>
                  Link Shortening
                </a>
              </li>
              <li>
                <a className='link footer__link' href='#'>
                  Branded Links
                </a>
              </li>
              <li>
                <a className='link footer__link' href='#'>
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <a className='link footer__link' href='#'>
                  Blog
                </a>
              </li>
              <li>
                <a className='link footer__link' href='#'>
                  Developers
                </a>
              </li>
              <li>
                <a className='link footer__link' href='#'>
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a className='link footer__link' href='#'>
                  About
                </a>
              </li>
              <li>
                <a className='link footer__link' href='#'>
                  Our Team
                </a>
              </li>
              <li>
                <a className='link footer__link' href='#'>
                  Careers
                </a>
              </li>
              <li>
                <a className='link footer__link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.iconWrapper}>
          <a
            href='#'
            className={`${styles.facebook} link footer__icon__link`}
            role='img'
            aria-label='facebook'
          ></a>
          <a
            href='#'
            className={`${styles.twitter} link footer__icon__link`}
            role='img'
            aria-label='twitter'
          ></a>
          <a
            href='#'
            className={`${styles.pinterest} link footer__icon__link`}
            role='img'
            aria-label='pinterest'
          ></a>
          <a
            href='#'
            className={`${styles.instagram} link footer__icon__link`}
            role='img'
            aria-label='instagram'
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
