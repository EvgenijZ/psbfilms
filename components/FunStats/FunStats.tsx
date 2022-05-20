import Title from '../Title/Title';
import styles from './FunStats.module.scss';

type TStat = {
	id: number;
	number: number;
	text: string;
};

const FunStats: React.FC = () => {
	const stats: [TStat] = [
		{ id: 1, number: 300, text: 'PROJECT FINISHED' },
		{ id: 2, number: 85, text: 'HAPPY CLIENTS' },
		{ id: 3, number: 12, text: 'YEARS EXPERIENCE' },
		{ id: 4, number: 43, text: 'AWARDS WON' },
	];

	return (
		<section className={styles.stats}>
			<Title title='Stats' subtitle='Fun' inline />
			<div className={styles['stats-wrap']}>
				{stats &&
					stats.map(({ id, number, text }) => {
						return (
							<div key={id} className={styles.item}>
								<div className={styles.number}>{number}</div>
								<p className={styles.text}>{text}</p>
							</div>
						);
					})}
			</div>
		</section>
	);
};

export default FunStats;
