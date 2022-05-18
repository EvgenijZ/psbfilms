import Clients from '../components/Clients/Clients';
import Directors from '../components/Directors/Directors';
import Poster from '../components/Poster/Poster';
//TODO: Add SEO and next/head

import Title from '../components/Title/Title';

const About = () => {
	return (
		<div>
			<Title title='Company' subtitle='About' />
			<Poster />
			<Title title='Story' subtitle='Our' inline />

			<div className='text-wrap'>
				<div className='text'>
					<p>
						PSB FILMS IS A FULL-SERVICE PRODUCTION COMPANY BASED IN KIEV,
						UKRAINE. WE SPECIALIZE IN THE PRODUCTION OF TV COMMERCIALS, FEATURE
						FILMS AND MUSIC VIDEOS.
					</p>
					<p>
						OVER THE PAST 18 YEARS, PSB FILMS HAS BECOME ONE OF UKRAINE'S TOP
						PRODUCTION COMPANIES. WE'VE PRODUCED AWARD-WINNING WORKS FOR SUCH
						CLIENTS AS PEPSI, SAMSUNG, STELLA ARTOIS, KRAFT FOODS, NESTLE,
						UNILEVER, COCA-COLA, DANONE AND TOYOTA AMONG OTHERS.
					</p>
				</div>
				<div className='text'>
					<p>
						WE PROVIDE A PRODUCTION SERVICES IN UKRAINE, GEORGIA, MOLDOVA,
						BELARUS, KAZAKHSTAN, LITHUANIA, LATVIA, ESTIONIA, ARMENIA AND
						AZERBADIJAN.
					</p>
					<p>
						THERE ARE MANY CHOICES IN KIEV WHEN IT COMES TO PRODUCTION, THUS, WE
						PROMISE TO HONOR YOUR TRUST, YOUR TIME AND YOUR BUSINESS WITH
						INTEGRITY AND PROFESSIONALISM.
					</p>
				</div>
			</div>

			<Title title='Clients' subtitle='Our' inline />
			<Clients />
			<Title title='Team' subtitle='Awesome' inline />
			<Directors />
			<Title title='Stats' subtitle='Fun' inline />
		</div>
	);
};

export default About;
