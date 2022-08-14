import React, { useRef } from 'react';
import styles from './button.module.scss'

export interface IButtonProps {
    children: React.ReactNode;
    isDisabled?: boolean;
    onClick: IClickEventHandler;
}

export interface IClickEventHandler<T = HTMLElement> {
    (e: React.MouseEvent<T>): void;
}

const Button: React.FC<IButtonProps> = (props) => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const { onClick, children } = props;

	return (
		<button className={styles.button} onClick={onClick} disabled={false} ref={buttonRef}>
			{children}
		</button>
	);
};

export default Button;
