import styles from './Title.module.scss';

interface Props {
	title?: string;
	name?: string;
	subtitle: string;
	inline?: boolean;
}

const Title: React.FC<Props> = ({ title, name, subtitle, inline }) => {
	const prepareStyles = () =>
		inline ? `${styles.wrap} ${styles.inline}` : styles.wrap;

	return (
		<div className={prepareStyles()}>
			<p className={styles.subtitle}>{subtitle}</p>
			{name ? (
				<h3 className={styles.title}>{name}</h3>
			) : (
				<h1 className={styles.title}>{title}</h1>
			)}
		</div>
	);
};

export default Title;
