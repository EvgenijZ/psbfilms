import Footer from './Footer/Footer';
import Header from './Header/Header';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

export default function Layout({ children }) {
	const themeVariant = useContext(ThemeContext);
	const prepareStyles = () => (themeVariant === 'light' ? null : 'content');

	return (
		<>
			<Header />
			<main className={prepareStyles()}>{children}</main>
			<div className='logo-text'>Psb</div>
			<Footer />
		</>
	);
}
