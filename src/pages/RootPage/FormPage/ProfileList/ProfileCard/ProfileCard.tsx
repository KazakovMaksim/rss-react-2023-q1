import React from 'react';
import Button from 'components/Button';

import { userDefaultImg } from 'constants/index';
import { FormDataItem, FormFields } from 'types';
import styles from './ProfileCard.module.scss';
import Clause from './Clause';

class DeliveryCard extends React.PureComponent<FormDataItem> {
  render() {
    const { user, phone, email, gender, birthday, extra } = this.props;
    const imgSrc = gender === 'male' ? userDefaultImg.male : userDefaultImg.female;

    return (
      <div key={user} className={styles.card}>
        <h3>Personal data</h3>
        <div>
          <Clause clauseName={FormFields.User} clauseText={user} />
          <Clause clauseName={FormFields.Phone} clauseText={phone} />
          <Clause clauseName={FormFields.Email} clauseText={email} />
          <Clause clauseName={FormFields.Gender} clauseText={gender} />
          <Clause clauseName={FormFields.Birthday} clauseText={birthday} />
          <Clause clauseName={FormFields.Extra} clauseText={extra} />
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
