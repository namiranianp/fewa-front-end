import React from 'react';
import '../../css/DisplayTags.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


/**
 * The main way to fetch tags from the backend and display them.
 * @class
 * @name DisplayTags
 */
class DisplayTags extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoaded: false,
			tags: [],
			textInput: React.createRef(),
			tagToAdd: ""
		};

	}

	/**
	* Is automatically called when this component successfully mounts.
	* In this case, it is used to fetch the tags from the backend.
	* @function
	* @name componentDidMount
	*/
	componentDidMount() {
		fetch(this.props.source + "deleteTag-")
			.then(response => response.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						tags: result.tags
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
	* Handles updating user text input
	* @function
	* @name handleChange
	*/
	handleChange() {
		this.setState({ tagToAdd: this.state.textInput.current.value })
	}

	/**
	* Adds a tag to the backend
	* @function
	* @name addTag
	*/
	addTag() {
		fetch(this.props.source + "addTag-" + this.state.tagToAdd);
		console.log(this.state.tagToAdd)
		this.render();
	}

	/**
	* Deletes a tag on the backend
	* @function
	* @name deleteTag
	*/
	deleteTag(tag) {
		fetch(this.props.source + "deleteTag-" + tag);
		this.render();
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
			tags
		} = this.state;

		if (error) {

			return null; // unless you want to return an error message

		} else if (!isLoaded) {

			return null;	// wait to return something

		} else {

			return (

				<ListGroup id="tags" onMouseLeave={() => { this.props.disable() }}>
					{tags.map(item => (
						<ListGroup.Item key={item.tag}>
							<Button onClick={() => this.deleteTag(item.tag)} variant="danger">X</Button>
							{'      '}
							{item.tag}
						</ListGroup.Item>
					))}
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Insert Tag"
							ref={this.state.textInput} type="text" onChange={() => this.handleChange()}
						/>
						<InputGroup.Append>
							<Button onClick={() => this.addTag()}>Add Tag</Button>
						</InputGroup.Append>
					</InputGroup>
				</ListGroup>
			);
		}
	}
}
export default DisplayTags;