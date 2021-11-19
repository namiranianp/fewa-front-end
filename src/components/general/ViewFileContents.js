import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DisplayFiles from './DisplayFiles.js';
import FileIcon from './FileIcon.js';


/**
 * Displays a selected file's content
 * @class
 * @name ViewFileContents
 */
class ViewFileContents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            files: []
		};
	}

	/**
	* Is automatically called when this component successfully mounts.
	* @function
	* @name componentDidMount
	*/
	componentDidMount() {
        console.log("rest call: " + this.props.suggested)
        fetch(this.props.suggested)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        files: result.files
                    });
                },
                (error) => {
                    this.setState({
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
            files
        } = this.state;

		return (
			<div>
				<Button variant="dark" onClick={() => console.log("click")}>Go Back</Button>
				<h1>{this.props.filename} hello</h1>
				<iframe title="File Content Viewer" src={this.props.source}></iframe>

                <Container>
                <br />
                    <Row>
                        {files.map(item => (
                            <Col md="auto" key={item.fullName}>
                                <FileIcon
                                    fullFileName={item.fullName}
                                    extension={item.extension}
                                    type={item.type}
                                    currentDir = {this.state.dir}
                                    parentCallback = {this.callback}
                                    navbar = {this.props.navbar} />
                            </Col>
                        ))}
                    </Row>
                </Container>
			</div>
		);
	}
}

export default ViewFileContents;