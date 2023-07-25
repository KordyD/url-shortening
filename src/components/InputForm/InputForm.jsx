import React from 'react';
import styles from './InputForm.module.scss';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
const InputForm = () => {
  return (
    <form className={styles.inputForm}>
      <Input placeholder='Shorten a link here...' />
      <Button type='shorten'>Shorten It !</Button>
    </form>
  );
};

export default InputForm;
