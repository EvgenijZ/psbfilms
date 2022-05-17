import Link from 'next/link';
import styles from './Caption.module.scss';

//TODO: Check this interface and add 404 page
interface Props {
	slide: {
		title: string;
		director: string;
		category: string;
		link: string;
	};
}

const Caption: React.FC<Props> = ({ slide }) => {
	const { title, director, category, link } = slide;

	return (
		<div className={styles.caption}>
			<Link href={link}>
				<a className={styles.link}>
					<h1 className={styles.title}>{title}</h1>
				</a>
			</Link>
			<p className={styles.director}>{director}</p>
			<div className={styles.category}>{category}</div>
		</div>
	);
};

export default Caption;
