import React from 'react';
import '../../css/FileIcon.css';

import ContentDisplayBox from './ContentDisplayBox.js';

import Card from 'react-bootstrap/Card';
import DisplayFiles from './DisplayFiles.js'
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
			dir: this.props.currentDir,
			change_dir: null,
			iconImage: UnknownFileIcon,
			fileContentsDisplay: null,
			if_dir: false
		};
		this.childKey = 0;
	}
/**
	
 */
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
		} else if ("jpeg".localeCompare(this.props.extension) === 0 || "jpg".localeCompare(this.props.extension) === 0) {
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
		++this.childKey;
		var temp = this.state.dir.toString();
		console.log("before parse: ", temp)
		// temp.replaceAll(':', 'C%A')
	 	temp = temp.split(':').join('%3A');
		temp = temp.split('/').join('%5C');
		temp = temp.split('\\').join('%5C');
		if ("txt".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source={"http://localhost:8080/file/txt/?file=" + temp + '%5C' + this.props.fullFileName}
					disable={() => this.disableContentDiplay()}
				/>
			});
		} else if ("mp4".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source={"http://localhost:8080/file/mp4/?file=" + temp + "%5C" + this.props.fullFileName}
					disable={() => this.disableContentDiplay()}
				/>
			});
		} else if ("pdf".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source={"http://localhost:8080/file/pdf/?file=" + temp + "%5C" + this.props.fullFileName}
					disable={() => this.disableContentDiplay()}
				/>
			});
		} else if ("png".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source={"http://localhost:8080/file/png/?file=" + temp + "%5C" + this.props.fullFileName}
					disable={() => this.disableContentDiplay()}
				/>
			});
		} else if ("jpeg".localeCompare(this.props.extension) === 0 || "jpg".localeCompare(this.props.extension) === 0) {
			this.setState({
				fileContentsDisplay: <ContentDisplayBox
					source={"http://localhost:8080/file/jpeg/?file=" + temp + "%5C" + this.props.fullFileName}
					disable={() => this.disableContentDiplay()}
				/>
			});
		}
		else if ("directory".localeCompare(this.props.type) === 0) {
			const dir = this.props.fullFileName
			function update(state, props) {
				return {...state, 
					image: FolderIcon,
					if_dir: true,
					change_dir: this.props.fullFileName
				}
			}
			this.setState(update);
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
		
		if (this.state.if_dir) {
			return (
				<div>
					<DisplayFiles key={this.childKey} rootDir={this.state.dir} current_Dir={this.state.change_dir} changeDir={true}/>				
				</div>
			)
		} 
		else {
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
}

export default FileIcon; 