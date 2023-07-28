import React, { useState } from 'react';
import styles from './InputForm.module.scss';
const InputForm = ({ handleSubmit, error }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <form className={`${styles.inputForm} container`}>
      <div>
        <input
          value={inputValue}
          className={`${styles.input} ${error ? styles.errorInput : ''}`}
          onChange={(e) => setInputValue(e.target.value)}
          type='url'
          placeholder='Shorten a link here...'
        />
        <button
          className='button basic square'
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(inputValue);
            setInputValue('');
          }}
        >
          Shorten It!
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default InputForm;
