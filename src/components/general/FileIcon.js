import React from 'react';
import '../../css/FileIcon.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
			iconImage: UnknownFileIcon,
			fileContentsDisplay: null
		};
	}

	/**
	* Uses information from the backend to determine which icon image to use.
	* @function
	* @name assignIcon
	*/
	assignIcon() {

		if ("txt".localeCompare(this.props.extension) === 0) {
			this.setState({ iconImage: TXTIcon });
		} else if ("mp4".localeCompare(this.props.extension) === 0) {
			this.setState({ iconImage: MP4Icon });
		} else if ("pdf".localeCompare(this.props.extension) === 0) {
			this.setState({ iconImage: PDFIcon });
		} else if ("png".localeCompare(this.props.extension) === 0) {
			this.setState({ iconImage: PNGIcon });
		} else if ("jpeg".localeCompare(this.props.extension) === 0) {
			this.setState({ iconImage: JPEGIcon });
		} else if ("directory".localeCompare(this.props.type) === 0) {
			this.setState({ iconImage: FolderIcon });
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
	* Attempts to display the file content based on the extension.
	* @function
	* @name displayContent
	*/
	displayContent() {

		if ("txt".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay:
					<Card id="overlay" border="dark" className="text-right">
						<Card.Header>
							<Button onClick={() => { this.disableContentDiplay() }} variant="danger">X</Button>
						</Card.Header>
						<Card.Body>
							<iframe title="PDF File Viewer" src="http://localhost:8080/txtContent/txtContent"></iframe>
						</Card.Body>
					</Card>
			});
		} else if ("mp4".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay:
					<Card id="overlay" border="dark" className="text-right">
						<Card.Header>
							<Button onClick={() => { this.disableContentDiplay() }} variant="danger">X</Button>
						</Card.Header>
						<Card.Body>
							<iframe title="PDF File Viewer" src="http://localhost:8080/mp4Content/mp4Content"></iframe>
						</Card.Body>
					</Card>
			});
		} else if ("pdf".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay:
					<Card id="overlay" border="dark" className="text-right">
						<Card.Header>
							<Button onClick={() => { this.disableContentDiplay() }} variant="danger">X</Button>
						</Card.Header>
						<Card.Body>
							<iframe title="PDF File Viewer" src="http://localhost:8080/pdfContent/pdfContent"></iframe>
						</Card.Body>
					</Card>
			});
		} else if ("png".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay:
					<Card id="overlay" border="dark" className="text-right">
						<Card.Header>
							<Button onClick={() => { this.disableContentDiplay() }} variant="danger">X</Button>
						</Card.Header>
						<Card.Body>
							<Card.Img variant="bottom" src="http://localhost:8080/pngContent/pngContent" />
						</Card.Body>
					</Card>
			});
		} else if ("jpeg".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay:
					<Card id="overlay" border="dark" className="text-right">
						<Card.Header>
							<Button onClick={() => { this.disableContentDiplay() }} variant="danger">X</Button>
						</Card.Header>
						<Card.Body>
							<Card.Img variant="bottom" src="http://localhost:8080/jpegContent/jpegContent" />
						</Card.Body>
					</Card>
			});
		}
	}

	/**
	* This is a handler for disabling the file content display box.
	* @function
	* @name disableContentDiplay
	*/
	disableContentDiplay() {
		this.setState({ fileContentsDisplay: null });
	}

	/**
	* Update the DOM with the rendered component.
	* @function
	* @name render
	*/
	render() {

		return (
			<Card id="icon" border="light">
				<Card.Img onClick={() => { this.displayContent() }} variant="top" height="20%" src={this.state.iconImage} />
				<Card.Body>
					<Card.Title>{this.props.fullFileName}</Card.Title>
				</Card.Body>

				{this.state.fileContentsDisplay}

			</Card>

		);
	}
}

export default FileIcon; 