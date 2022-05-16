import Social from '../Social/Social';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
	const getCopyright = () => `© PSBFILMS ${new Date().getFullYear()}`;
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.copyright}>{getCopyright()}</div>
				<Social />
			</div>
		</footer>
	);
};

export default Footer;
