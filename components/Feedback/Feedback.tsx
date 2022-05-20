import { useState } from 'react';
import Button from '../Button/Button';
import Title from '../Title/Title';
import styles from './Feedback.module.scss';

const Feedback: React.FC = () => {
	const [input, setInput] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const sendMessage = (e) => {
		e.preventDefault();
		console.log(123);
	};

	const onChangeInput = (e) =>
		setInput({ ...input, [e.target.id]: e.target.value });

	return (
		<>
			<Title name='Us' subtitle='Write' inline />
			<form className={styles.feedback} onSubmit={sendMessage}>
				<div className={styles.group}>
					<label className={styles.label} htmlFor='name'>
						Your Name
					</label>
					<input
						type='text'
						id='name'
						className={styles.input}
						value={input.name}
						onChange={onChangeInput}
					/>
				</div>
				<div className={styles.group}>
					<label className={styles.label} htmlFor='email'>
						Your Email
					</label>
					<input
						type='email'
						id='email'
						className={styles.input}
						value={input.email}
						onChange={onChangeInput}
					/>
				</div>
				<div className={styles.group}>
					<label className={styles.label} htmlFor='subject'>
						Subject
					</label>
					<input
						type='text'
						id='subject'
						className={styles.input}
						value={input.subject}
						onChange={onChangeInput}
					/>
				</div>
				<div className={styles.group}>
					<label className={styles.label} htmlFor='message'>
						Your Message
					</label>
					<textarea
						id='message'
						className={styles.input}
						value={input.message}
						onChange={onChangeInput}></textarea>
				</div>
				<Button type='submit' variant='dark' text='Send message' />
			</form>
		</>
	);
};
export default Feedback;
