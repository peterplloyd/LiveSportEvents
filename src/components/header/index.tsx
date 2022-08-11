import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
     <div className={styles.header}>
        <a href="/">Join</a>
        <a href="/">Login</a>
    </div>
  );
}

export default Header;
