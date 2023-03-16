import React from 'react';

import styles from './Header.module.scss';
import NavBar from './NavBar';

class Header extends React.PureComponent {
  render() {
    return (
      <header className={styles.header}>
        <NavBar />
      </header>
    );
  }
}
export default Header;
