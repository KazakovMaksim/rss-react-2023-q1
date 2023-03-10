import React from 'react';

import styles from './NotFoundPage.module.scss';

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <main className={styles.not_found}>Oops, these is no such a page, come back here later</main>
    );
  }
}

export default NotFoundPage;
