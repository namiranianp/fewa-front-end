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

		this.state = {
			tag: ''
		};

	}
	
	handleSubmit = (event) => {
		event.preventDefault();
	}
	
	handleAdd() {
		fetch("http://localhost:8080/tag/add/?tagName=" + this.state.tag + '&filePath=' + this.props.dir)
	}
	
	handleDelete() {
		fetch("http://localhost:8080/delete/?filePath=" + this.props.dir)
	}
	
	handleDeleteTag() {
		fetch("http://localhost:8080/tag/remove/?tagName=" + this.state.tag + '&filePath=' + this.props.dir)
	}
	
	handleDownload() {
		fetch("http://localhost:8080/download/?filePath=" + this.props.dir)
		.then(resp => resp.blob())
		.then(blob => {
		  const url = window.URL.createObjectURL(blob);
		  const a = document.createElement('a');
		  a.style.display = 'none';
		  a.href = url;
		  // the filename you want
		  a.download = this.props.dir.replace(/.*(%2F)/, '');//get the file name
		  document.body.appendChild(a);
		  a.click();
		  window.URL.revokeObjectURL(url);
		  alert('your file has downloaded!'); // or you know, something with better UX...
		})
		.catch(() => alert('oh no!'));
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
				<Form inline>
					<FormControl type="text" placeholder="Enter your tag name here~" 
							value={this.state.value} 
							onChange={(event) => {this.loadTag(event);this.handleSubmit(event);}}/>
					<Button variant="success" onClick={() => {this.handleAdd()}}>Add Tags</Button>

					<Button variant="warning" onClick={() => {this.handleDeleteTag()}}>Delete Tags</Button>
				</Form>
				<Button variant="danger" onClick={() => {this.handleDelete()}}>Delete</Button>
				<a href = {"/file" + this.props.dir} download>
					<Button variant="success">Download</Button>
				</a>

			</ButtonGroup>
			
			
		);
	}
}

export default RightClickMenu;
