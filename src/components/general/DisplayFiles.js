import React from 'react';
import '../../css/DisplayFiles.css';

import LoadingSpinner from './LoadingSpinner.js';
import FileIcon from './FileIcon.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * The main way to fetch files from the backend and display them.
 * @class
 * @name DisplayFiles
 */
class DisplayFiles extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			files: []
		};

	}

	/**
	* Is automatically called when this component successfully mounts.
	* In this case, it is used to fetch the file information from the backend.
	* @function
	* @name componentDidMount
	*/
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

	/**
	* Update the DOM with the rendered component.
	* @function
	* @name render
	*/
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
				<Container>
				<br />
					<Row>
						{files.map(item => (
							<Col md="auto" key={item.fullName}>
								<FileIcon fullFileName={item.fullName} extension={item.extension} type={item.type} />
							</Col>
						))}
					</Row>
				</Container>
			);
		}
	}
}
export default DisplayFiles;