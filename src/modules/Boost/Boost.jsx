import React from 'react';
import styles from './Boost.module.scss';
const Boost = () => {
  return (
    <section className={styles.boostBackground}>
      <div className={`${styles.boost} container`}>
        <h1>Boost your links today</h1>
        <button className='button basic'>Get Started</button>
      </div>
    </section>
  );
};

export default Boost;
