import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Hamburger.module.scss';

//TODO: Check the onClose event before click on links

const Hamburger: React.FC = ({ children }) => {
	const [visible, setVisible] = useState(false);

	const prepareStyles = () =>
		visible ? `${styles.collapse} ${styles.show}` : styles.collapse;

	const toogleMenu = () => setVisible(!visible);

	return (
		<>
			<button className={styles.hamburger} onClick={toogleMenu}>
				{visible ? (
					<FontAwesomeIcon icon={faTimes} size='2x' />
				) : (
					<FontAwesomeIcon icon={faBars} size='2x' />
				)}
			</button>
			<div className={prepareStyles()}>{children}</div>
		</>
	);
};

export default Hamburger;
