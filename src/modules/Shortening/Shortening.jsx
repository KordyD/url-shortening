import React, { useEffect, useState } from 'react';
import InputForm from '../../components/InputForm/InputForm';
import styles from './Shortening.module.scss';
import LinkCard from '../../components/LinkCard/LinkCard';

const Shortening = () => {
  const [error, setError] = useState('');
  const reg =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  const createLink = (oldLink) => {
    try {
      setError('');
      if (!oldLink) {
        throw new Error('Please enter a url');
      }
      if (!oldLink.match(reg)) {
        throw new Error('Please enter a valid url');
      }


    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <InputForm handleSubmit={createLink} />
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <LinkCard
        oldLink='https://www.youtube.com/'
        newLink='https://www.youtube.com/'
      />
    </div>
  );
};

export default Shortening;
