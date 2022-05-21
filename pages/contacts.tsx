import Contacts from '../components/Contacts/Contacts';
import Feedback from '../components/Feedback/Feedback';
import Poster from '../components/Poster/Poster';
import Title from '../components/Title/Title';

const ContactsPage = () => {
	return (
		<div>
			<Title title='Contacts' subtitle='Our' />
			<Poster src='/poster2.jpg' />
			<div className='block-wrap'>
				<Feedback />
				<Contacts />
			</div>
		</div>
	);
};

export default ContactsPage;
