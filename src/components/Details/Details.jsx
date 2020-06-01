import React from 'react';
import styles from './Details.module.css';

import exit from "../../icons/exit.png";
import onlineIcon from "../../icons/onlineIcon.png";

const Details = ({ room }) => {
	return (
		<div className={styles.roomInfo}>
			<div className={styles.leftContainer}>
				<img className={styles.onlineIcon} src={onlineIcon} alt="Online"/>
				<h3>{ room }</h3>
			</div>
			<div className={styles.rightContainer}>
				<a href="/saladchat"><img src={exit} alt="Exit" /></a>
			</div>
		</div>
	)

}

export default Details;
