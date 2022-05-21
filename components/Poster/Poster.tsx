import Image from 'next/image';
import Caption from '../Caption/Caption';
import styles from './Poster.module.scss';

interface Props {
	src: string;
}

const Poster: React.FC<Props> = ({ src }) => {
	return (
		<div className={styles.poster}>
			<Image
				className={styles.image}
				src={src}
				height={485}
				width={1032}
				alt='#'
			/>
		</div>
	);
};

export default Poster;
