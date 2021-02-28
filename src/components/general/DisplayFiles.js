import React from 'react';
import LoadingSpinner from './LoadingSpinner.js';
import FileIcon from './FileIcon.js';

class DisplayFiles extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			files: []
		};

	}

	componentDidMount() {
		fetch("http://localhost:8080/jsontest/jsontest")
			.then(response => response.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						files: result.files
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	render() {

		const {
			error,
			isLoaded,
			files
		} = this.state;

		if (error) {

			return <div>Error Occurred: {error.message}</div>;

		} else if (!isLoaded) {

			return (
				<LoadingSpinner />
			);

		} else {
			return (
				files.map(item => (
					<div key={item.name}>
						<FileIcon fileName = {item.name} extension={item.extension} type={item.type}/>
					</div>
				))
			);
		}
	}
}
export default DisplayFiles;