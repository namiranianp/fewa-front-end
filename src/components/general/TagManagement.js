import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RightClickMenu from './RightClickMenu.js';
import FileIcon from './FileIcon.js';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import '../../css/TagManagement.css';

/**
 * Displays a selected file's content
 * @class
 * @name ViewFileContents
 */
class TagManagement extends React.Component {
	constructor(props) {
		super(props);

		this.navbar = this.props.navbar;
        this.dir = this.props.dir;
        this.filename = this.props.filename;

		this.state = {
            tags: []
		};
	}

	/**
	* Is automatically called when this component successfully mounts.
	* @function
	* @name componentDidMount
	*/
	componentDidMount() {
	console.log('fetching ' + "http://localhost:8080/tag/display/?filePath=" + this.dir)
        fetch("http://localhost:8080/tag/display/?filePath=" + this.dir)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        tags: result.tags
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
            tags
        } = this.state;

		return (
			<div>
				<Button variant="dark" onClick={() => this.props.navbar.loadBackViewFileContents()}>Go Back</Button>

				<h1> Tag Management </h1>
				<h3> {this.filename} </h3>

            <div class="center">
				<Form inline>
					<FormControl type="text" placeholder="add new tag"
							value={this.state.value}
							onChange={(event) => {console.log("shee")}}/>
					<Button variant="success" onClick={() => {console.log("add")}}>Add Tags</Button>
				</Form>
            </div>

                <Container>
                <br />
                    {tags.map(item => (
                        <Row md="auto">
                            <Col key={item}>{item}</Col>
                            <Col><Button onClick={() => { console.log("fuck") }} variant="danger">Remove Tag</Button></Col>
                        </Row>
                    ))}
                </Container>
			</div>
		);
	}
}

export default TagManagement;