import styles from './Contacts.module.scss';

type TContact = {
	id: number;
	name: string;
	type: string;
	value: string;
};

const Contacts: React.FC = () => {
	const contacts: [TContact] = [
		{ id: 1, name: 'Production', type: 'mailto', value: 'PITCH@PSBFILMS.COM' },
		{ id: 2, name: 'Casting', type: 'mailto', value: 'CASTING@PSBFILMS.COM' },
		{
			id: 3,
			name: 'Visit us',
			type: 'address',
			value: '20 ESPLANADNA STR., KYIV, UKRAINE',
		},
		{ id: 4, name: 'Call us', type: 'tel', value: '+380 44 537 07 17' },
	];

	const prepareValue = (type, value) =>
		type === 'address' ? (
			value
		) : (
			<a className={styles.link} href={`${type}:${value}`}>
				{value}
			</a>
		);

	return (
		<div className='block-right'>
			<div className={styles.contacts}>
				{contacts &&
					contacts.map(({ id, name, type, value }) => (
						<div key={id} className={styles.contact}>
							<div className={styles.title}>{name}</div>
							<p className={styles.type}>{prepareValue(type, value)}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default Contacts;
