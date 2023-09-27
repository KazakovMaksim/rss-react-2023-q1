import ProfileList from './ProfileList';
import Form from './Form';

import styles from './FormPage.module.scss';

const FormPage = () => {
  return (
    <main className={styles.form_page}>
      <h2 className={styles.form_title}>Profile maintenance</h2>
      <Form />
      <ProfileList />
    </main>
  );
};

export default FormPage;
