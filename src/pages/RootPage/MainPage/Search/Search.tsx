import React, { useEffect } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';

import styles from './Search.module.scss';

const Search = () => {
  const [value, setValue] = React.useState<string>('');
  const inputValue = React.useRef<string>(value);

  const handleInput = (newValue: string) => {
    setValue(newValue);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('inputValueLS', value);
  };

  useEffect(() => {
    const inputValueLS = localStorage.getItem('inputValueLS');

    if (inputValueLS) {
      setValue(inputValueLS);
    }
  }, []);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <Input
          value={value}
          className={styles.search_input}
          placeholder="Search property"
          onChange={handleInput}
        />
        <Button type="submit" className={styles.search_btn}>
          Find
        </Button>
      </form>
    </div>
  );
};

export default Search;
