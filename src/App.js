import React from 'react';
import './css/App.css';
import TopBar from './components/general/TopBar.js';
import DisplayFiles from './components/general/DisplayFiles.js';

export class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<DisplayFiles />
			</div>
		);
	}
}

export default App;