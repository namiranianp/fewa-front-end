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
		console.log(this.props.extension + " extension")
		this.extension = this.props.extension;
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
                    console.log("files: "  + this.state.files)
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

        console.log(this.extension +  " ooooh fuck")

        if (this.extension.toLowerCase() != "mp3" && this.extension.toLowerCase() != "m4a" && this.extension.toLowerCase() != "wav")
        {
            return (
                <div>
                    <Button variant="dark" onClick={() => this.props.navbar.loadBackViewFileContents()}>Go Back</Button>

                    <h1> {this.props.filename} </h1>

                    <small>{this.props.path}/{this.props.filename}</small>

                    <br />

                    <iframe title="File Content Viewer" src={this.props.source}></iframe>

                    <h4> You may also be interested in... </h4>

                    <Container>
                    <br />
                        <Row>
                            {files.sort().map(item => (
                                <Col md="auto" key={item.fullName}>
                                    <FileIcon
                                        fullFileName={item.fullName}
                                        extension={item.extension}
                                        type={item.type}
                                        currentDir = {item.path.slice(0, item.path.length - item.fullName.length - 1)}
                                        parentCallback = {this.callback}
                                        navbar = {this.props.navbar}
                                        suggestedRedirect = {true}
                                        />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            );
		} else {
            return (
                <div>
                    <Button variant="dark" onClick={() => this.props.navbar.loadBackViewFileContents()}>Go Back</Button>

                    <h1> {this.props.filename} </h1>

                    <small>{this.props.path}/{this.props.filename}</small>

                    <br />

                    <audio controls>
                        <source src={this.props.source}/>
                    </audio>

                    <h4> You may also be interested in... </h4>

                    <Container>
                    <br />
                        <Row>
                            {files.sort().map(item => (
                                <Col md="auto" key={item.fullName}>
                                    <FileIcon
                                        fullFileName={item.fullName}
                                        extension={item.extension}
                                        type={item.type}
                                        currentDir = {item.path.slice(0, item.path.length - item.fullName.length - 1)}
                                        parentCallback = {this.callback}
                                        navbar = {this.props.navbar}
                                        suggestedRedirect = {true}
                                        />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            );
		}
	}
}

export default ViewFileContents;