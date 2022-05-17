import Link from 'next/link';
import { useRouter } from 'next/router';
import Hamburger from '../Hamburger/Hamburger';
import Logotype from '../Logotype/Logotype';
import styles from './Navbar.module.scss';

type TLink = {
	name: string;
	slug: string;
};

const Navbar: React.FC = () => {
	const router = useRouter();
	const themeStyle = router.pathname === '/' ? 'light' : 'dark';
	const prepareLinkStyle = (link) =>
		router.pathname == link ? `${styles.link} ${styles.active}` : styles.link;

	const links: Array<TLink> = [
		{ name: 'Home', slug: '/' },
		{ name: 'About', slug: '/about' },
		{ name: 'Directors', slug: '/directors' },
		{ name: 'Work', slug: '/work' },
		{ name: 'Services & Insentives', slug: '/services-insentives' },
		{ name: 'Contact', slug: '/contact' },
	];
	return (
		<nav className={`${styles.navbar} ${styles[themeStyle]}`}>
			<Logotype variant={themeStyle} />
			<Hamburger>
				<ul className={styles.list}>
					{links.map(({ name, slug }) => (
						<li className={styles.item} key={slug}>
							<Link href={slug}>
								<a className={prepareLinkStyle(slug)}>{name}</a>
							</Link>
						</li>
					))}
				</ul>
			</Hamburger>
		</nav>
	);
};

export default Navbar;
