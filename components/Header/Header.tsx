import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Navbar />
		</header>
	);
};

export default Header;
