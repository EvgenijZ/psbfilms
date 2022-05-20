import styles from './Button.module.scss';

interface Props {
	variant: string;
	type?: string;
	text: string;
}

const Button: React.FC<Props> = ({ variant, type, text }) => {
	const prepareStyles = () => `${styles.button} ${styles[variant]}`;
	return (
		<button type={type} className={prepareStyles()}>
			{text}
		</button>
	);
};

export default Button;
