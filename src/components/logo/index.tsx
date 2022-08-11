import React from 'react';
import styles from './logo.module.scss';

interface ILogoOptions {
	src: string;
	link?: string;
	title: string;
	alt: string;
}

const Logo: React.FC<ILogoOptions> = ({ link, title, alt, src }) => (
	<header className={styles.logoHeader}>
		{link ? (
			<a href={link}>
				<div className={styles.logoHeader__container}>
					<title>{title}</title>
					<img
						src={src}
						className={styles.logoHeader__container__logo}
						alt={alt}
					/>
				</div>
			</a>
		) : (
			<div className={styles.logoHeader__container}>
				<title>{title}</title>
				<img
				  src={src}
					className={styles.logoHeader__container__logo}
					alt={alt}
				/>
			</div>
		)}
	</header>
);

export default Logo;
