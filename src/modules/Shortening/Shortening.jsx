import React, { useState } from 'react';
import InputForm from '../../components/InputForm/InputForm';
import styles from './Shortening.module.scss';
import LinkCard from '../../components/LinkCard/LinkCard';
import { useDispatch, useSelector } from 'react-redux';
import { createShortLink } from '../../store/linkSlice';

const Shortening = () => {
  const [oldLink, setOldLink] = useState('');

  // const [error, setError] = useState('');
  // const reg =
  //   /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  // try {
  //   setError('');
  //   if (!oldLink) {
  //     throw new Error('Please enter a url');
  //   }
  //   if (!oldLink.match(reg)) {
  //     throw new Error('Please enter a valid url');
  //   }
  // } catch (err) {
  //   setError(err.message);
  // }

  const links = useSelector((state) => state.links.links);

  const dispatch = useDispatch();

  const createNewLink = () => {
    dispatch(createShortLink(oldLink));
  };

  const handleChange = (value) => {
    setOldLink(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <InputForm
          handleSubmit={() => createNewLink()}
          handleChange={handleChange}
        />
        {/* {error && <p className={styles.error}>{error}</p>} */}
      </div>
      {links.map((card) => (
        <LinkCard oldLink='' newLink={card} />
      ))}
    </div>
  );
};

export default Shortening;
