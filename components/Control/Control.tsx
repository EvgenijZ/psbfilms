import styles from './Control.module.scss';

const Control: React.FC = ({ slides, current, changeSlide }) => {
	const prepareStyles = (id) =>
		id === current ? `${styles.control} ${styles.active}` : styles.control;

	return (
		<div className={styles.controls}>
			{slides &&
				slides.map(({ id }, index) => (
					<div
						key={id}
						onClick={() => changeSlide(index)}
						className={prepareStyles(id)}></div>
				))}
		</div>
	);
};

export default Control;
