import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../../css/LoadingSpinner.css';

class LoadingSpinner extends React.Component {
	constructor(props) {
		super(props);
	}
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