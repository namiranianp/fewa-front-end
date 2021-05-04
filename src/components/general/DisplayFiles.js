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
			dir: this.props.rootDir,
			error: null,
			isLoaded: false,
			files: []
		};

	}

	/**
	* Is automatically called when this component successfully mounts.
	* In this case, it is used to fetch the file information from the backend. "http://localhost:8080/seed/?dir=C%3A%5CUsers%5CKevin%5CDocuments%5Ctest%5Ctest-1"
	* @function
	* @name componentDidMount
	*/
	componentDidMount() {
		console.log("=================DisplayFiles state DIR: ", this.state.dir);
		fetch(this.state.dir)
			.then(response => response.json())
			.then(
				(result) => {
					this.setState({
						dir: this.state.dir,
						isLoaded: true,
						files: result.files
					});
				},
				(error) => {
					this.setState({
						dir: null,
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
			dir,
			error,
			isLoaded,
			files
		} = this.state;

		if (error) {
			
			return (
			<div>
				Error Occurred: {error.message}
			</div>
			);

		} else if (!isLoaded) {

			return (
				<LoadingSpinner />
			);

		} else {
			
			return (
				<div>
				
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
				</div>
			);
		}
	}
}
export default DisplayFiles;