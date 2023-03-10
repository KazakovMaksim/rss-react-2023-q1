import React from 'react';

import styles from './Header.module.scss';

class Header extends React.PureComponent {
  render() {
    return <header className={styles.header}>Header</header>;
  }
}
export default Header;
