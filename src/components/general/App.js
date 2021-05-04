import React from 'react';
import '../../css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './MainNavBar.js';

/**
 * The root component that handles all other React components.
 * @class
 */
export class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	reRender() {
		this.forceUpdate();
	}
	/**
	* Update the DOM with the rendered component.
	testing if commits work??
	* @function
	* @name render
	*/
	render() {
		return (
			<div>
				<MainNavBar />
			</div>
		);
	}
}

export default App;