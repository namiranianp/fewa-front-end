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
		    tag: '',
            tags: [],
		};
	}


	refresh() {
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

	handleSubmit = (event) => {
		event.preventDefault();
	}

	loadTag = (event) => {
		this.setState({
			tag: event.target.value
		})
	}

    handleAdd() {
        console.log("add tag: " + "http://localhost:8080/tag/add/?tagName=" + this.state.tag + '&filePath=' + this.props.dir)
        fetch("http://localhost:8080/tag/add/?tagName=" + this.state.tag + '&filePath=' + this.props.dir)
    }

	handleDeleteTag(tag) {
	    console.log("delete tag: " + "http://localhost:8080/tag/remove/?tagName=" + tag + '&filePath=' + this.props.dir)
		fetch("http://localhost:8080/tag/remove/?tagName=" + tag + '&filePath=' + this.props.dir)
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
                                onChange={(event) => {this.loadTag(event);this.handleSubmit(event);}}/>
                        <Button variant="success" onClick={() => {this.handleAdd();this.refresh();}}>Add Tags</Button>
                    </Form>
                </div>

                <Container>
                <br />
                    {tags.sort().map(item => (
                        <Row md="auto">
                            <Col key={item}>{item}</Col>
                            <Col><Button onClick={() => { this.handleDeleteTag(item); this.refresh(); }} variant="danger">Remove Tag</Button></Col>
                        </Row>
                    ))}
                </Container>
			</div>
		);
	}
}

export default TagManagement;