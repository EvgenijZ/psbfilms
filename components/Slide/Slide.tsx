import Image from 'next/image';
import Caption from '../Caption/Caption';
import styles from './Slide.module.scss';

const Slide: React.FC = ({ slides, current }) => {
	const prepareStyles = (id) =>
		id === current ? `${styles.item} ${styles.current}` : styles.item;

	return (
		<div className={styles.items}>
			{slides &&
				slides.map((slide) => (
					<div key={slide.id} className={prepareStyles(slide.id)}>
						<Image
							className={styles.image}
							src={slide.src}
							alt={slide.alt}
							layout='fill'
						/>
						<Caption slide={slide} />
					</div>
				))}
		</div>
	);
};

export default Slide;
