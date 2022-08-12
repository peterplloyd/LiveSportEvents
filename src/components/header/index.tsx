import React from 'react';
import Logo from '../logo';
import skyBetLogo from '../../images/logo.png'
import styles from './header.module.scss';

const Header = () => {
  return (
     <div className={styles.header}>
        <Logo src={skyBetLogo} title="Sky Betting and Gaming" alt="Sky Betting and Game Logo" />
    </div>
  );
}

export default Header;
