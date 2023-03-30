import React from 'react';

import styles from './Header.module.scss';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
}


export default Header;
