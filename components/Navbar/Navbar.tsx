import { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../../contexts/theme-context';
import Hamburger from '../Hamburger/Hamburger';
import Logotype from '../Logotype/Logotype';
import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';

type TLink = {
	name: string;
	slug: string;
};

const Navbar: React.FC = () => {
	const router = useRouter();
	const themeVariant = useContext(ThemeContext);
	const prepareLinkStyle = (link) =>
		router.pathname == link ? `${styles.link} ${styles.active}` : styles.link;

	const links: Array<TLink> = [
		{ name: 'Home', slug: '/' },
		{ name: 'About', slug: '/about' },
		{ name: 'Directors', slug: '/directors' },
		{ name: 'Work', slug: '/work' },
		{ name: 'Contacts', slug: '/contacts' },
	];
	return (
		<nav className={`${styles.navbar} ${styles[themeVariant]}`}>
			<Logotype variant={themeVariant} />
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
