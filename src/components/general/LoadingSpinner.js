import React from 'react';
import Spinner from 'react-loader-spinner';
import '../../css/LoadingSpinner.css';

class LoadingSpinner extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="loadingSpinner">
				<Spinner
					type="TailSpin"
					color="#00BFFF"
					height={100}
					width={100}
				/>
			</div>
		);
	}
}

export default LoadingSpinner;