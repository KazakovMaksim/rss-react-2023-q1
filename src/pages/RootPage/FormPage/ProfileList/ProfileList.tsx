import React from 'react';
import { FormDataItem } from 'types';
import ProfileCard from './ProfileCard';

import styles from './ProfileList.module.scss';

type CardsItems = {
  cards: FormDataItem[] | [];
};

class ProfileList extends React.PureComponent<CardsItems> {
  render() {
    const { cards } = this.props;
    const list = cards.map((card: FormDataItem) => {
      return <ProfileCard key={crypto.randomUUID()} card={card} />;
    });
    const deliveryList = cards.length ? list : <div>profiles list is still empty</div>;

    return <div className={styles.list}>{deliveryList}</div>;
  }
}

export default ProfileList;
