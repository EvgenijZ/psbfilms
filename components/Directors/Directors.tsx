import Image from 'next/image';
import styles from './Directors.module.scss';

type TDirector = {
	id: number;
	firstName: string;
	lastName: string;
	image: string;
	socials: [{ name: string; link: string }];
};

const Directors: React.FC = () => {
	const directors: [TDirector] = [
		{
			id: 1,
			firstName: 'Gabi',
			lastName: 'Martin',
			image: '1.jpg',
			socials: [{ name: 'Vimeo', link: 'http://vimeo.com' }],
		},
		{
			id: 2,
			firstName: 'Miguel',
			lastName: 'Coimbra',
			image: '2.jpg',
			socials: [{ name: 'Vimeo', link: 'http://vimeo.com' }],
		},
		{
			id: 3,
			firstName: 'Matthias',
			lastName: 'Zentner',
			image: '3.jpg',
			socials: [{ name: 'Vimeo', link: 'http://vimeo.com' }],
		},
	];

	return (
		<section className={styles.directors}>
			{directors &&
				directors.map(({ id, firstName, lastName, image, socials }) => {
					return (
						<div key={id} className={styles.director}>
							<Image
								className={styles.logotype}
								src={`/directors/${image}`}
								height={483}
								width={296}
								alt={`${firstName} ${lastName}`}
							/>
							<div className={styles.firstName}>{firstName}</div>
							<div className={styles.lastName}>{lastName}</div>
						</div>
					);
				})}
		</section>
	);
};

export default Directors;
