import React from 'react';
import '../../css/FileIcon.css';

import ContentDisplayBox from './ContentDisplayBox.js';
import DisplayTags from './DisplayTags.js';

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
			iconImage: UnknownFileIcon,
			fileContentsDisplay: null,
			tagDisplay: null
		};
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
	* Attempts to display the file content based on the extension.
	* @function
	* @name displayContent
	*/
	displayContent() {

		if ("txt".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source="http://localhost:8080/txtContent/txtContent"
					disable={() => this.disableContentDiplay()}
				/>
			});
		} else if ("mp4".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source="http://localhost:8080/mp4Content/mp4Content"
					disable={() => this.disableContentDiplay()}
				/>
			});
		} else if ("pdf".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source="http://localhost:8080/pdfContent/pdfContent"
					disable={() => this.disableContentDiplay()}
				/>
			});
		} else if ("png".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source="http://localhost:8080/pngContent/pngContent"
					disable={() => this.disableContentDiplay()}
				/>
			});
		} else if ("jpeg".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source="http://localhost:8080/jpegContent/jpegContent"
					disable={() => this.disableContentDiplay()}
				/>
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
	* Attempts to display the tags based on the file.
	* @function
	* @name displayTags
	*/
	displayTags() {

		if ("txt".localeCompare(this.props.extension) === 0) {
			this.setState({
				tagDisplay: <DisplayTags
					source="http://localhost:8080/tagtest/tagtest?tag=txt-"
					disable={() => this.disableTagDiplay()}
				/>
			});
		} else if ("mp4".localeCompare(this.props.extension) === 0) {
			this.setState({
				tagDisplay: <DisplayTags
					source="http://localhost:8080/tagtest/tagtest?tag=mp4-"
					disable={() => this.disableTagDiplay()}
				/>
			});
		} else if ("pdf".localeCompare(this.props.extension) === 0) {
			this.setState({
				tagDisplay: <DisplayTags
					source="http://localhost:8080/tagtest/tagtest?tag=pdf-"
					disable={() => this.disableTagDiplay()}
				/>
			});
		} else if ("png".localeCompare(this.props.extension) === 0) {
			this.setState({
				tagDisplay: <DisplayTags
					source="http://localhost:8080/tagtest/tagtest?tag=png-"
					disable={() => this.disableTagDiplay()}
				/>
			});
		} else if ("jpeg".localeCompare(this.props.extension) === 0) {
			this.setState({
				tagDisplay: <DisplayTags
					source="http://localhost:8080/tagtest/tagtest?tag=jpeg-"
					disable={() => this.disableTagDiplay()}
				/>
			});
		}
	}

	/**
	* This is a handler for disabling the file content display box.
	* @function
	* @name disableContentDiplay
	*/
	disableTagDiplay() {
		this.setState({ tagDisplay: null });
	}

	/**
	* Update the DOM with the rendered component.
	* @function
	* @name render
	*/
	render() {

		return (
			<Card id="icon" border="light">

				<Card.Img
					onClick={() => { this.displayContent() }}
					onMouseEnter={() => { this.displayTags() }}
					variant="top" height="20%" src={this.state.iconImage} />
				<Card.Body>
					<Card.Title>{this.props.fullFileName}</Card.Title>
				</Card.Body>

				{this.state.fileContentsDisplay}
				{this.state.tagDisplay}

			</Card>

		);
	}
}

export default FileIcon; 