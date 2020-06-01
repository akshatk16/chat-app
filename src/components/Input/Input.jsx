import React from 'react';
import styles from './Input.module.css';


const Input = ({ message, sendMessage, setMessage }) => {
	return (
		<form className={styles.form}>
			<input
				className={styles.textMessage}
				type="text"
				placeholder="Type a message..."
				value={ message }
				onChange={ (event) => setMessage(event.target.value) }
				onKeyPress={ event => event.charCode === 13 ? sendMessage(event) : null }
			/>
		<button
			className={styles.sendButton}
			onClick={ (event) => sendMessage(event) }
		>
		Send
		</button>
		</form>
	)

}

export default Input;
