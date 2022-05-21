import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Categories.module.scss';

type TCategory = {
	id: number;
	slug: string;
	name: string;
};

const Categories = () => {
	const router = useRouter();
	const { slug } = router.query;

	const categories: [TCategory] = [
		{ id: 1, slug: 'branded', name: 'Branded' },
		{ id: 2, slug: 'music', name: 'Music' },
		{ id: 3, slug: 'movies', name: 'Movies' },
		{ id: 4, slug: 'stills', name: 'Stills' },
		{ id: 5, slug: 'heritage', name: 'Heritage' },
		{ id: 6, slug: 'behind-the-scenes', name: 'Behind the scenes' },
	];

	const prepareStyles = (categorySlug) =>
		slug === categorySlug ? `${styles.link} ${styles.active}` : styles.link;

	return (
		<nav className={styles.categories}>
			<ul className={styles.list}>
				{categories &&
					categories.map(({ id, slug, name }) => (
						<li key={id} className={styles.item}>
							<Link href={`/work/${slug}`}>
								<a className={prepareStyles(slug)}>{name}</a>
							</Link>
						</li>
					))}
			</ul>
		</nav>
	);
};

export default Categories;
