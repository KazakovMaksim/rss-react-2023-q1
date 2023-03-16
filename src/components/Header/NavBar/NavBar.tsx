import React from 'react';

import { NavLink } from 'react-router-dom';
import headerLinks from 'constants/index';

import styles from './NavBar.module.scss';

class NavBar extends React.PureComponent {
  render() {
    const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? styles.active : '');

    return (
      <ul className={styles.nav}>
        {headerLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} className={setActive}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

export default NavBar;
