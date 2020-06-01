import React from 'react';
import ReactEmoji from 'react-emoji';
import styles from './Message.module.css';


const Message = ({ message: { text, user }, name }) => {
	let isSentByCurrentUser = false;

	const nameCorrected = name.trim().toLowerCase();

	if(user === nameCorrected) {
		isSentByCurrentUser = true;
	}


	return (
		isSentByCurrentUser
		? (
			<div className={`${styles.justifyEnd} ${styles.messageContainer}`}>
				<p className={`${styles.pr10} ${styles.sentText}`}>
					{nameCorrected}
				</p>
				<div className={`${styles.backgroundDark} ${styles.messageBox}`}>
					<p className={styles.textMessage}>
						{ReactEmoji.emojify(text)}
					</p>
				</div>
			</div>
		) : (
			<div className={`${styles.justifyStart} ${styles.messageContainer}`}>
				<div className={`${styles.backgroundLight} ${styles.messageBox}`}>
					<p className={styles.textMessage}>
						{ReactEmoji.emojify(text)}
					</p>
				</div>
				<p className={`${styles.pl10} ${styles.sentText}`}>
					{user}
				</p>
			</div>
		)
	)

}

export default Message;
