import React from 'react';
import { FormDataItem } from 'types';
import ProfileList from './ProfileList';
import Form from './Form';

import styles from './FormPage.module.scss';

type FormDataState = {
  cards: FormDataItem[] | [];
};

class FormPage extends React.Component<object, FormDataState> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  handleSubmit = (formData: FormDataItem) => {
    const { cards } = this.state;
    const newState = [...cards, formData];
    this.setState({ cards: newState });
  };

  render() {
    const { cards } = this.state;
    return (
      <main className={styles.form_page}>
        <h2 className={styles.form_title}>Profile maintenance</h2>
        <Form handleCards={this.handleSubmit} />
        <ProfileList cards={cards} />
      </main>
    );
  }
}

export default FormPage;
