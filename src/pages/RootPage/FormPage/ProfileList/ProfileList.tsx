import React from 'react';
import { CardItem, CardsItems } from 'types';
import ProfileCard from './ProfileCard';

import styles from './ProfileList.module.scss';

type ProfileListProps = {
  cards: CardsItems;
};

const ProfileList = ({ cards }: ProfileListProps) => {
  const list = cards.map((card: CardItem) => {
    return <ProfileCard key={crypto.randomUUID()} card={card} />;
  });
  const deliveryList = cards.length ? list : <div>profiles list is still empty</div>;

  return <div className={styles.list}>{deliveryList}</div>;
};

export default ProfileList;
