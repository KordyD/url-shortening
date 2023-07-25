import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>More than just shorter links</h1>
      <p className={styles.text}>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Welcome;
