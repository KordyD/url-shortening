import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, type, ...props }) => {
  return (
    <button
      className={`${styles.button} ${
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
    </button>
  );
};

export default Button;
