import ProfileCard from './ProfileCard';

import styles from './ProfileList.module.scss';
import usedTypedSelector from '../../../../hooks/useTypedSelector';

const ProfileList = () => {
  const { profiles } = usedTypedSelector((state) => state);
  const list = profiles.map((card) => {
    return <ProfileCard key={crypto.randomUUID()} card={card} />;
  });
  const deliveryList = profiles.length ? list : <div>profiles list is still empty</div>;

  return <div className={styles.list}>{deliveryList}</div>;
};

export default ProfileList;
