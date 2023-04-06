import React from 'react';
import Button from 'components/Button';

import { CardItem, FormFields } from 'types';
import styles from './ProfileCard.module.scss';
import Clause from './Clause';

type ProfileCardProp = {
  card: CardItem;
};

const ProfileCard = ({ card }: ProfileCardProp) => {
  const { file } = card;
  const formFieldsValues = Object.values(FormFields);
  const clauses = formFieldsValues.map((value) => (
    <Clause key={crypto.randomUUID()} clauseName={value} clauseText={card[value] as string} />
  ));

  return (
    <div className={styles.card}>
      <h3>Personal data</h3>
      <div>{clauses}</div>
      <img src={URL.createObjectURL(file)} alt="user profile" />
      <div>
        <Button className={styles.card_btn}>delete</Button>
        <Button className={styles.card_btn}>change</Button>
      </div>
    </div>
  );
};

export default ProfileCard;
