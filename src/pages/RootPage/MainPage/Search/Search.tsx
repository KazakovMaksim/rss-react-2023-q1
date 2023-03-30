import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';

import styles from './Search.module.scss';

type InputState = {
  readonly value: string;
};

class Search extends React.Component<object, InputState> {
  constructor(props: object) {
    super(props);

    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    const inputValueLS = localStorage.getItem('inputValueLS');
    if (inputValueLS) {
      this.setState({ value: inputValueLS });
    }
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('inputValueLS', value);
  }

  handleInput = (newValue: string) => {
    this.setState({ value: newValue });
  };

  render() {
    const { value } = this.state;

    return (
      <div className={styles.search}>
        <Input
          value={value}
          className={styles.search_input}
          placeholder="Search property"
          onChange={this.handleInput}
        />
        <Button className={styles.search_btn}>Find</Button>
      </div>
    );
  }
}

export default Search;
