import React, {useState} from 'react';
import {Link} from "react-router-dom";

import styles from './Join.module.css'

export default function SignIn() {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	return (<div className={styles.outerContainer}>
		<div className={styles.innerContainer}>
			<h1 className={styles.heading}>Join A Room</h1>
			<div>
				<input
					placeholder="Name"
					className={styles.inputBox}
					type="text"
					onChange={(event) => setName(event.target.value)}/>
			</div>
			<div>
				<input
					placeholder="Room Code"
					className={`${styles.inputBox} ${styles.inputBox2}`}
					type="text"
					onChange={(event) => setRoom(event.target.value)}/>
			</div>
			<Link onClick={e => (!name || !room)
					? e.preventDefault()
					: null} to={`../chat?name=${name}&room=${room}`}>
				<button className={styles.button} type="submit">Sign In</button>
			</Link>
		</div>
	</div>);
}
