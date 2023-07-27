import React from 'react';
import styles from './InputForm.module.scss';
const InputForm = ({ handleSubmit, handleChange }) => {
  return (
    <form className={styles.inputForm}>
      <input
        //       .input {
        //   padding: 10px 20px;
        //   border-radius: 10px;
        //   border: none;
        //   font-family: inherit;
        // }

        onChange={(e) => handleChange(e.target.value)}
        type='url'
        placeholder='Shorten a link here...'
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Shorten It!
      </button>
    </form>
  );
};

export default InputForm;
