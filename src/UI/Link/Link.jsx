import React from 'react';
import styles from './Link.module.scss';

const Link = ({ children, type, href, ...props }) => {
  return (
    <a
      href={href}
      className={`${styles.link} ${
        type
          ? type
              .split(' ')
              .map((item) => styles[item])
              .join(' ')
          : ''
      }`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
