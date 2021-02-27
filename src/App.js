import React from 'react';
import './css/App.css';
import TopBar from './components/general/TopBar.js';
import DisplayFiles from './components/general/DisplayFiles.js';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div>
			<TopBar />
			<DisplayFiles />
		</div>

		);
	}
}

export default App;