import React from 'react';
import LoadingSpinner from './LoadingSpinner.js';
import FileIcon from './FileIcon.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
				<Container>
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