import Image from 'next/image';
import Link from 'next/link';

//TODO: Add PropTypes

const Logotype: React.FC = ({ variant }) => {
	return (
		<Link href='/'>
			<a>
				<Image
					src={`/psb-${variant}.svg`}
					alt='Psb Films'
					width={80}
					height={45}
				/>
			</a>
		</Link>
	);
};

export default Logotype;
