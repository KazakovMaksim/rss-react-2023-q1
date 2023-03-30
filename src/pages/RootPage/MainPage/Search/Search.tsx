import React, { useEffect } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';

import styles from './Search.module.scss';

type InputState = {
  readonly value: string;
};

const Search = () => {
  const [value, setValue] = React.useState<string>('');
  let inputValue = React.useRef<string>(value);

  const handleInput = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    const inputValueLS = localStorage.getItem('inputValueLS');

    if (inputValueLS) {
      setValue(inputValueLS);
    }

    return () => {
      localStorage.setItem('inputValueLS', inputValue.current);
    }
  }, []);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);

  return <div className={styles.search}>
      <Input
        value={value}
        className={styles.search_input}
        placeholder="Search property"
        onChange={handleInput}
      />
      <Button className={styles.search_btn}>Find</Button>
    </div>;
};

export default Search;
