import React from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import useActions from 'hooks/useActions';
import usedTypedSelector from 'hooks/useTypedSelector';
import styles from './Search.module.scss';

const Search = () => {
  const { searchValue } = usedTypedSelector((state) => state.products);
  const { addSearchValue } = useActions();

  const [value, setValue] = React.useState<string>(searchValue);

  const handleInput = (newValue: string) => {
    setValue(newValue);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSearchValue(value);
  };

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
