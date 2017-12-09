import React, {Component} from 'react';
import config from './config.json';

import styles from './Gretter.css';					// 导入 css modules

class Greeter extends Component {
	render () {
		console.log('This is Greeter.js');
		return (
			<div className={styles.root}> { config.greetText } </div>
		);
	}
}

export default Greeter;