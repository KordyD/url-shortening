import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={`${styles.wrapper} container`}>
      <div className={styles.textWrapper}>
        <h1 className={styles.header}>More than just shorter links</h1>
        <p className={styles.text}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='button basic'>Get Started</button>
      </div>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src='/src/assets/illustration-working.svg'
          alt='Working'
          width={733}
          height={482}
        />
      </div>
    </section>
  );
};

export default Hero;
