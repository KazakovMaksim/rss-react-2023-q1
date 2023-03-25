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
      const { user, gender, phone, email, birthday, extra } = card;
      return (
        <ProfileCard
          key={user}
          user={user}
          gender={gender}
          phone={phone}
          email={email}
          birthday={birthday}
          extra={extra}
        />
      );
    });
    const deliveryList = cards.length ? list : <div>profiles list is still empty</div>;

    return <div className={styles.list}>{deliveryList}</div>;
  }
}

export default ProfileList;
