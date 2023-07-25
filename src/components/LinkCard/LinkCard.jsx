import React from 'react';
import Button from '../../UI/Button/Button';
import Link from '../../UI/Link/Link';
import styles from './LinkCard.module.scss';

const LinkCard = ({ oldLink, newLink }) => {
  return (
    <div className={styles.linkCard}>
      <Link type='oldLink' href={oldLink}>
        {oldLink}
      </Link>
      <div>
        <Link type='newLink' href={newLink}>
          {newLink}
        </Link>
        <Button type='shorten'>Copy</Button>
      </div>
    </div>
  );
};

export default LinkCard;
