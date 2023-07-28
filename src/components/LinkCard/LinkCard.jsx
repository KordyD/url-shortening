import React, { useState } from 'react';
import styles from './LinkCard.module.scss';

const LinkCard = ({ oldLink, newLink, handleClick, copied }) => {
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
        <button
          onClick={() => handleClick(newLink)}
          className='button basic square'
          disabled={newLink === copied ? true : false}
        >
          {newLink === copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
