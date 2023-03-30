import React from 'react';
import Button from 'components/Button';

import { FormDataItem, FormFields } from 'types';
import styles from './ProfileCard.module.scss';
import Clause from './Clause';

type ProfileCardProp = {
  card: FormDataItem;
};

class ProfileCard extends React.PureComponent<ProfileCardProp> {
  render() {
    const { card } = this.props;
    const { user, phone, email, gender, birthday, extra, tariff, file } = card;

    return (
      <div className={styles.card}>
        <h3>Personal data</h3>
        <div>
          <Clause clauseName={FormFields.User} clauseText={user} />
          <Clause clauseName={FormFields.Phone} clauseText={phone} />
          <Clause clauseName={FormFields.Email} clauseText={email} />
          <Clause clauseName={FormFields.Gender} clauseText={gender} />
          <Clause clauseName={FormFields.Birthday} clauseText={birthday} />
          <Clause clauseName={FormFields.Tariff} clauseText={tariff} />
          <Clause clauseName={FormFields.Extra} clauseText={extra} />
        </div>
        <img src={URL.createObjectURL(file)} alt="user profile" />
        <div>
          <Button className={styles.card_btn}>delete</Button>
          <Button className={styles.card_btn}>change</Button>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
