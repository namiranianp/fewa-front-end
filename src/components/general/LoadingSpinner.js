import React from 'react';
import '../../css/LoadingSpinner.css';

import Spinner from 'react-bootstrap/Spinner';

/**
 * Displays a spinning wheel while loading info from the backend is occuring.
 * @class
 * @name LoadingSpinner
 */
class LoadingSpinner extends React.Component {
	constructor(props) {
		super(props);
	}

	/**
	* Update the DOM with the rendered component.
	* @function
	* @name render
	*/
	render() {
		return (
			<div id="loadingSpinner">
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		);
	}
}

export default LoadingSpinner;