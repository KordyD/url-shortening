import React from 'react';
import styles from './InputForm.module.scss';
const InputForm = ({ handleSubmit, handleChange }) => {
  return (
    <form className={`${styles.inputForm} container`}>
      <input
        className={styles.input}
        onChange={(e) => handleChange(e.target.value)}
        type='url'
        placeholder='Shorten a link here...'
      />
      <button
        className='button basic square'
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Shorten It!
      </button>
      {/* {error && <p className={styles.error}>{error}</p>} */}
    </form>
  );
};

export default InputForm;
