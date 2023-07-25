import React from 'react';
import styles from './Input.module.scss';

const Input = ({ placeholder, ...props }) => {
  return (
    <input className={styles.input} placeholder={placeholder} {...props} />
  );
};

export default Input;
