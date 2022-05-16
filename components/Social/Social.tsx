import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faYoutube,
	faFacebook,
	faVimeo,
} from '@fortawesome/free-brands-svg-icons';

const Social = () => {
	return (
		<div className='social-container'>
			<a
				href='https://www.facebook.com/learnbuildteach/'
				className='facebook social'>
				<FontAwesomeIcon icon={faFacebook} size='2x' />
			</a>
			<a
				href='https://www.youtube.com/c/jamesqquick'
				className='youtube social'>
				<FontAwesomeIcon icon={faYoutube} size='2x' />
			</a>
			<a href='https://www.vimeo.com' className='vimeo social'>
				<FontAwesomeIcon icon={faVimeo} size='2x' />
			</a>
		</div>
	);
};

export default Social;
