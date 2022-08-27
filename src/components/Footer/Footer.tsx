import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p>
          &#169; 2022 Bonne Terre Limited or its affiliated companies. The Sky trademarks are owned
          by Sky UK Limited and are used under licence. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
