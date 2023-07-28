import React from 'react';
import styles from './AdvCard.module.scss';

const AdvCard = ({ header, text, img }) => {
  return (
    <li className={styles.advCard}>
      <div className={styles.imgWrapper}>
        <img src={img} />
      </div>
      <h2>{header}</h2>
      <p>{text}</p>
    </li>
  );
};

export default AdvCard;
