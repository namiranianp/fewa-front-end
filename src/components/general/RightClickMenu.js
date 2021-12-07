import React from 'react';
import '../../css/RightClickMenu.css';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

/**
 * Displays a custom context menu with options.
 * @class

 * @name RightClickMenu
 */
class RightClickMenu extends React.Component {
	constructor(props) {
		super(props);

        this.navbar = this.props.navbar;

        this.dir = this.props.dir;
        this.filename = this.props.filename;

		this.state = {
			tag: ''
		};

	}
	
	handleSubmit = (event) => {
		event.preventDefault();
	}

	handleDisplay() {
		console.log("display tag: " + "http://localhost:8080/tag/display/?filePath=" + this.props.dir)
		fetch("http://localhost:8080/tag/display/?filePath=" + this.props.dir)
	}

	handleAdd() {
		console.log("add tag: " + "http://localhost:8080/tag/add/?tagName=" + this.state.tag + '&filePath=' + this.props.dir)
		fetch("http://localhost:8080/tag/add/?tagName=" + this.state.tag + '&filePath=' + this.props.dir)
	}
	
	handleHide() {
		console.log("hide: " + "http://localhost:8080/delete/hide/?filePath=" + this.props.dir)
		fetch("http://localhost:8080/delete/hide/?filePath=" + this.props.dir)
	}

    handleDeleteFile() {
        console.log("delete: " + "http://localhost:8080/delete/delete/?filePath=" + this.props.dir)
        fetch("http://localhost:8080/delete/delete/?filePath=" + this.props.dir)
    }
	
	handleDeleteTag() {
	    console.log("delete tag: " + "http://localhost:8080/tag/hide/?tagName=" + this.state.tag + '&filePath=' + this.props.dir)
		fetch("http://localhost:8080/tag/hide/?tagName=" + this.state.tag + '&filePath=' + this.props.dir)
	}

	redirectManageTags() {
	    this.navbar.loadTagManagement(this.dir, this.filename)
	}

    redirectManageTags() {
        this.navbar.loadTagManagement(this.dir, this.filename)
    }
	
	loadTag = (event) => {
		this.setState({
			tag: event.target.value
		})
	}


	/**
	* Update the DOM with the rendered component.
	* @function

	* @name render
	*/
	render() {

		return (
			<ButtonGroup vertical id="menuOverlay"
			
				onMouseLeave={() => { this.props.disable() }}
				style={{ left: this.props.XPos - 20, top: this.props.YPos - 120 }}>
				
				<Button onClick={() => { this.props.displayContent() }} variant="primary">Open File</Button>
				<Button variant="secondary"onClick={() => {this.props.displayPopUpContent()}}>Pop Up File</Button>
				<Form inline>
					<FormControl type="text" placeholder="Enter tag name"
							value={this.state.value} 
							onChange={(event) => {this.loadTag(event);this.handleSubmit(event);}}/>
					<Button variant="success" onClick={() => {this.handleAdd()}}>Add Tags</Button>
					<Button variant="warning" onClick={() => {this.handleDeleteTag()}}>Delete Tags</Button>
				</Form>
				<Button variant="dark"onClick={() => {this.redirectManageTags()}}>Manage Tags</Button>
				<Button variant="secondary"onClick={() => {this.handleHide()}}>Hide File</Button>
				<Button variant="danger"onClick={() => {this.handleDeleteFile()}}>Delete File</Button>

			</ButtonGroup>
		);
	}
}

export default RightClickMenu;