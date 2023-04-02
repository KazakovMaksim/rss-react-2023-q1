import React from 'react';
import { CardsItems, FormDataItem } from 'types';
import ProfileList from './ProfileList';
import Form from './Form';

import styles from './FormPage.module.scss';

const FormPage = () => {
  const [cards, setCards] = React.useState<CardsItems>([]);

  const handleSubmit = (formData: FormDataItem) => {
    const newState = [...cards, formData];
    setCards(newState);
  };

  return (
    <main className={styles.form_page}>
      <h2 className={styles.form_title}>Profile maintenance</h2>
      <Form handleCards={handleSubmit} />
      <ProfileList cards={cards} />
    </main>
  );
};

export default FormPage;
