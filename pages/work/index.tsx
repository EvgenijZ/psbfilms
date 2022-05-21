import { NextPage } from 'next';
import Categories from '../../components/Categories/Categories';
import Title from '../../components/Title/Title';

const Work: NextPage = () => {
	return (
		<div>
			<Title title='Portfolio' subtitle='Our' />
			<Categories />
		</div>
	);
};

export default Work;
