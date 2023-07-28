import React, { useState } from 'react';
import InputForm from '../../components/InputForm/InputForm';
import styles from './Shortening.module.scss';
import LinkCard from '../../components/LinkCard/LinkCard';
import { useDispatch, useSelector } from 'react-redux';
import { createShortLink } from '../../store/linkSlice';

const Shortening = () => {
  const linkCards = useSelector((state) => state.linkCards.linkCards);

  const dispatch = useDispatch();

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

  const [copiedLink, setCopiedLink] = useState('');

  const createNewLink = (oldLink) => {
    dispatch(createShortLink(oldLink));
  };

  const copyLink = (link) => {
    navigator.clipboard.writeText(link).then(() => setCopiedLink(link));
  };

  return (
    <div>
      <div className={styles.inputFormBackground}>
        <InputForm handleSubmit={createNewLink} />
      </div>
      <div className={styles.linkCardsBackground}>
        <div className={`${styles.linkCardsWrapper} container`}>
          {linkCards.map((card) => (
            <LinkCard
              oldLink={card.oldLink}
              newLink={card.newLink}
              handleClick={copyLink}
              copied={copiedLink}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shortening;
