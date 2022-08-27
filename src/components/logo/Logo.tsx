import React from 'react';
import styles from './Logo.module.scss';

interface ILogoOptions {
  src: string;
  link?: string;
  title: string;
  alt: string;
}

const Logo: React.FC<ILogoOptions> = ({ link, title, alt, src }) => (
  <div className={styles.logoHeader}>
    {link ? (
      <a href={link}>
        <div className={styles.logoHeader__container}>
          <title>{title}</title>
          <img src={src} className={styles.logoHeader__container__logo} alt={alt} />
        </div>
      </a>
    ) : (
      <div className={styles.logoHeader__container}>
        <title>{title}</title>
        <img src={src} className={styles.logoHeader__container__logo} alt={alt} />
      </div>
    )}
  </div>
);

export default Logo;
