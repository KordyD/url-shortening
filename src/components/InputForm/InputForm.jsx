import React, { useState } from 'react';
import styles from './InputForm.module.scss';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
const InputForm = ({ handleSubmit, handleChange }) => {
  return (
    <form className={styles.inputForm}>
      <Input
        onChange={(e) => handleChange(e.target.value)}
        type='url'
        placeholder='Shorten a link here...'
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        type='shorten'
      >
        Shorten It !
      </Button>
    </form>
  );
};

export default InputForm;
