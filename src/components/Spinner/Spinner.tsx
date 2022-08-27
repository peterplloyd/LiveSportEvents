import spinner from '../../images/Spinner.gif';
import styles from './Spinner.module.scss'

const Spinner: React.FC = () => (
	<div>
		<img className={styles.spinner} src={spinner} alt="Spinner" />
	</div>
);

export default Spinner;
