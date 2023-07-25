import React from 'react';
import InputForm from '../../components/InputForm/InputForm';
import styles from './Shortening.module.scss';
import LinkCard from '../../components/LinkCard/LinkCard';

const Shortening = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <InputForm />
      </div>
      <LinkCard
        oldLink='https://www.youtube.com/'
        newLink='https://www.youtube.com/'
      />
    </div>
  );
};

export default Shortening;
