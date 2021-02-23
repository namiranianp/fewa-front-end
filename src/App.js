import React from 'react';
import './css/App.css';
import TopBar from './components/general/TopBar.js';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div>
			<TopBar />
			<p id='testText'>Submit a Github username to test the fetch feature.</p>
			<input type="text" id="input"></input>
			<p id="error">Input longer than 5 characters</p>
		</div>

		);
	}
}

export default App;