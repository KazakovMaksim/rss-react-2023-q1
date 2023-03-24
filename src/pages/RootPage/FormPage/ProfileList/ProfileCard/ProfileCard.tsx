import React from 'react';
import Button from 'components/Button';

import { userDefaultImg } from 'constants/index';
import FormFields from 'types/index';
import styles from './ProfileCard.module.scss';
import Clause from './Clause';

type FormDataState = {
  user: string;
  gender: string;
};

class DeliveryCard extends React.PureComponent<FormDataState> {
  render() {
    const { user, gender } = this.props;
    const imgSrc = gender === 'male' ? userDefaultImg.male : userDefaultImg.female;

    return (
      <div key={user} className={styles.card}>
        <h3>Personal data</h3>
        <div>
          <Clause clauseName={FormFields.User} clauseText={`${user}`} />
          <Clause clauseName={FormFields.Phone} clauseText="9273608767" />
          <Clause clauseName={FormFields.Email} clauseText="cash@mail.ru" />
          <Clause clauseName={FormFields.Gender} clauseText={gender} />
          <Clause clauseName={FormFields.Age} clauseText="30" />
          <Clause
            clauseName={FormFields.Extra}
            clauseText="ready get alerts, ready to receive ads"
          />
        </div>
        <img src={imgSrc} alt="user profile" />
        <div>
          <Button className={styles.card_btn}>delete</Button>
          <Button className={styles.card_btn}>change</Button>
        </div>
      </div>
    );
  }
}

export default DeliveryCard;
