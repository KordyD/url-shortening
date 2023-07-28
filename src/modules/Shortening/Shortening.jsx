import React, { useState } from 'react';
import InputForm from '../../components/InputForm/InputForm';
import styles from './Shortening.module.scss';
import LinkCard from '../../components/LinkCard/LinkCard';
import { useDispatch, useSelector } from 'react-redux';
import { createShortLink, setError } from '../../store/linkSlice';

const Shortening = () => {
  const linkCards = useSelector((state) => state.linkCards.linkCards);
  const error = useSelector((state) => state.linkCards.error);

  const dispatch = useDispatch();

  const reg =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  const [copiedLink, setCopiedLink] = useState('');

  const createNewLink = (oldLink) => {
    try {
      dispatch(setError({ error: '' }));
      if (!oldLink) {
        throw new Error('Please enter a url');
      }
      if (!oldLink.match(reg)) {
        throw new Error('Please enter a valid url');
      }
      dispatch(createShortLink(oldLink));
    } catch (error) {
      dispatch(setError({ error: error.message }));
    }
  };

  const copyLink = (link) => {
    navigator.clipboard.writeText(link).then(() => setCopiedLink(link));
  };

  return (
    <div>
      <div className={styles.inputFormBackground}>
        <InputForm handleSubmit={createNewLink} error={error} />
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
