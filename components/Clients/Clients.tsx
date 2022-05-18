import styles from './Clients.module.scss';
import Image from 'next/image';

type TClient = {
	id: number;
	name: string;
	src: string;
	width: number;
	height: number;
};

const Clients: React.FC = () => {
	const clients: [TClient] = [
		{ id: 1, name: 'Nike', src: '1.jpg', width: 60, height: 31 },
		{ id: 2, name: 'Adobe', src: '2.jpg', width: 39, height: 35 },
		{ id: 3, name: 'Microsoft', src: '3.jpg', width: 38, height: 39 },
		{ id: 4, name: 'Ikea', src: '4.jpg', width: 82, height: 16 },
		{ id: 5, name: 'T-Mobile', src: '5.jpg', width: 31, height: 39 },
		{ id: 6, name: 'GoDaddy', src: '6.jpg', width: 90, height: 20 },
		{ id: 7, name: 'Disney', src: '7.jpg', width: 49, height: 39 },
		{ id: 8, name: 'Yahoo', src: '8.jpg', width: 39, height: 25 },
		{ id: 9, name: 'Google', src: '9.jpg', width: 39, height: 39 },
		{ id: 10, name: 'NASA', src: '10.jpg', width: 65, height: 16 },
	];

	return (
		<section className={styles.clients}>
			{clients &&
				clients.map((client) => (
					<div key={client.id} className={styles.client}>
						<Image
							className={styles.logotype}
							src={`/clients/${client.src}`}
							height={client.height}
							width={client.width}
							alt={client.name}
						/>
					</div>
				))}
		</section>
	);
};

export default Clients;
