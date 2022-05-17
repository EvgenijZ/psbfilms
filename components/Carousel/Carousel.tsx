import { useState } from 'react';
import Slide from '../Slide/Slide';
import Control from '../Control/Control';
import styles from './Carousel.module.scss';

type TSlide = {
	id: number;
	src: string;
	alt: string;
	link: string;
	title: string;
	director: string;
	category: string;
};

const Carousel: React.FC = () => {
	const slides: Array<TSlide> = [
		{
			id: 1,
			src: '/bg.jpg',
			alt: 'Slide 1',
			link: '/directors',
			title: 'Vodafone PSBFilms',
			director: 'Gabi Martin',
			category: 'Branded',
		},
		{
			id: 2,
			src: '/bg2.jpg',
			alt: 'Slide 2',
			link: '/directors',
			title: 'Vodafone PSBFilms2',
			director: 'Gabi Martin',
			category: 'Branded',
		},
		{
			id: 3,
			src: '/bg3.jpg',
			alt: 'Slide 3',
			link: '/directors',
			title: 'Vodafone PSBFilms3',
			director: 'Gabi Martin',
			category: 'Branded',
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<div className={styles.carousel}>
			<div className={styles.wrap}>
				{slides && <Slide slides={slides} current={slides[currentSlide].id} />}
				{slides && (
					<Control
						slides={slides}
						changeSlide={setCurrentSlide}
						current={slides[currentSlide].id}
					/>
				)}
			</div>
		</div>
	);
};

export default Carousel;
