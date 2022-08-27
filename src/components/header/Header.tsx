import React from 'react';
import Logo from '../Logo/Logo';
import skyBetLogo from '../../images/Logo.png'
import styles from './Header.module.scss';

const Header = () => {
  return (
     <header className={styles.header}>
        <Logo src={skyBetLogo} title="Sky Betting and Gaming" alt="Sky Betting and Game Logo" />
    </header>
  );
}

export default Header;
