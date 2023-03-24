import React from 'react';
import ProfileCard from './ProfileCard';

import styles from './ProfileList.module.scss';

type FormDataState = {
  user: string;
  gender: string;
};

type CardsItems = {
  cards: FormDataState[] | [];
};

class ProfileList extends React.PureComponent<CardsItems> {
  render() {
    const { cards } = this.props;
    const list = cards.map((card: FormDataState) => {
      const { user, gender } = card;
      return <ProfileCard key={user} user={user} gender={gender} />;
    });

    const deliveryList = cards.length ? list : <div>profiles list is still empty</div>;
    return <div className={styles.list}>{deliveryList}</div>;
  }
}

export default ProfileList;
