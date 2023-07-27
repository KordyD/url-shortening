import React from 'react';
import styles from './LinkCard.module.scss';

const LinkCard = ({ oldLink, newLink }) => {
  return (
    <div className={styles.linkCard}>
      <a
        className='link linkCard__oldLink'
        href={oldLink}
        rel='noopener noreferrer'
        target='_blank'
      >
        {oldLink}
      </a>
      <div>
        <a
          className='link linkCard__newLink'
          href={newLink}
          rel='noopener noreferrer'
          target='_blank'
        >
          {newLink}
        </a>
        <button className='button basic square'>Copy</button>
      </div>
    </div>
  );
};

export default LinkCard;
