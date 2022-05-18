import Image from 'next/image';
import Caption from '../Caption/Caption';
import styles from './Poster.module.scss';

const Poster: React.FC = () => {
	return (
		<div className={styles.poster}>
			<Image
				className={styles.image}
				src={'/poster1.jpg'}
				height={485}
				width={1032}
				alt='#'
			/>
		</div>
	);
};

export default Poster;
