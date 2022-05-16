import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faYoutube,
	faFacebookF,
	faVimeoV,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Social.module.scss';

const Social: React.FC = () => {
	return (
		<div className={styles.social}>
			<a
				href='https://www.facebook.com/learnbuildteach/'
				className={`${styles.link} ${'facebook social'}`}>
				<FontAwesomeIcon
					className={`${styles.icon} ${styles.facebook}`}
					icon={faFacebookF}
					size='2x'
				/>
			</a>
			<a
				href='https://www.youtube.com/c/jamesqquick'
				className={`${styles.link} ${'youtube social'}`}>
				<FontAwesomeIcon
					className={`${styles.icon} ${styles.youtube}`}
					icon={faYoutube}
					size='2x'
				/>
			</a>
			<a
				href='https://www.vimeo.com'
				className={`${styles.link} ${'vimeo social'}`}>
				<FontAwesomeIcon
					className={`${styles.icon} ${styles.vimeo}`}
					icon={faVimeoV}
					size='2x'
				/>
			</a>
		</div>
	);
};

export default Social;
