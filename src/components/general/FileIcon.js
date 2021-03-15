import React from 'react';
import '../../css/FileIcon.css';

import Card from 'react-bootstrap/Card';

import TXTIcon from '../../Icons/TXTIcon.svg';
import FolderIcon from '../../Icons/FolderIcon.svg';
import MP4Icon from '../../Icons/MP4Icon.svg';
import PDFIcon from '../../Icons/PDFIcon.svg';
import PNGIcon from '../../Icons/PNGIcon.svg';
import UnknownFileIcon from '../../Icons/UnknownFileIcon.svg';
import JPEGIcon from '../../Icons/JPEGIcon.svg';

/**
 * An individual File Icon object, that represents a file from the backend.
 * @class
 * @name FileIcon
 */
class FileIcon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: UnknownFileIcon
		};
	}

	/**
	* Uses information from the backend to determine which icon image to use.
	* @function
	* @name assignIcon
	*/
	assignIcon() {

		if ("txt".localeCompare(this.props.extension) === 0) {
			this.setState({image: TXTIcon});
		} else if ("mp4".localeCompare(this.props.extension) === 0) {
			this.setState({image: MP4Icon});
		} else if ("pdf".localeCompare(this.props.extension) === 0) {
			this.setState({image: PDFIcon});
		} else if ("png".localeCompare(this.props.extension) === 0) {
			this.setState({image: PNGIcon});
		} else if ("jpeg".localeCompare(this.props.extension) === 0) {
			this.setState({image: JPEGIcon});
		} else if ("directory".localeCompare(this.props.type) === 0) {
			this.setState({image: FolderIcon});
		}

	}
	
	/**
	* Is automatically called when this component successfully mounts.
	* In this case, it is used to load the file icons only once.
	* @function
	* @name componentDidMount
	*/
	componentDidMount() {
		this.assignIcon();
	}

	/**
	* Update the DOM with the rendered component.
	* @function
	* @name render
	*/
	render() {

		return (
			<Card onClick={()=>{ alert('alert')}} id="icon" border="light">
				<Card.Img variant="top" height="20%" src={this.state.image} />
				<Card.Body>
					<Card.Title>{this.props.fullFileName}</Card.Title>
				</Card.Body>
			</Card>
		);
	}
}

export default FileIcon;