import React from 'react';
import styles from './LinkCard.module.scss';

const LinkCard = ({ oldLink, newLink }) => {
  return (
    <div className={styles.linkCard}>
      <a href={oldLink}>{oldLink}</a>
      <div>
        <a href={newLink}>{newLink}</a>
        <button>Copy</button>
      </div>
    </div>
  );
};

export default LinkCard;
