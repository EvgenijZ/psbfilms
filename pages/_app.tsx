import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import 'normalize.css/normalize.css';
import '../styles/globals.scss';
import { ThemeContext } from '../contexts/theme-context';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const prepareValueContext = router.pathname === '/' ? 'light' : 'dark';
	return (
		<ThemeContext.Provider value={prepareValueContext}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeContext.Provider>
	);
}

export default MyApp;
