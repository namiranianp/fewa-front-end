import React from 'react';
import '../../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayFiles from './DisplayFiles.js';

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