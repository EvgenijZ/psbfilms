import styles from './Footer.module.scss';

const Footer: React.FC = () => {
	const getCopyright = () => `© PSBFILMS ${new Date().getFullYear()}`;
	return (
		<footer className={styles.footer}>
			<div>{getCopyright()}</div>
		</footer>
	);
};

export default Footer;
