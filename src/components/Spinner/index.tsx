import spinner from '../../images/spinner.gif';
import styles from './spinner.module.scss'

const Spinner: React.FC = () => (
	<div>
		<img className={styles.spinner} src={spinner} alt="Spinner" />
	</div>
);

export default Spinner;
