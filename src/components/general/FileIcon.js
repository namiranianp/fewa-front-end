import React from 'react';
import '../../css/FileIcon.css';

import ContentDisplayBox from './ContentDisplayBox.js';
import RightClickMenu from './RightClickMenu.js';

import Card from 'react-bootstrap/Card';

import TXTIcon from '../../Icons/TXTIcon.svg';
import FolderIcon from '../../Icons/FolderIcon.svg';
import MP4Icon from '../../Icons/MP4Icon.svg';
import PDFIcon from '../../Icons/PDFIcon.svg';
import PNGIcon from '../../Icons/PNGIcon.svg';
import UnknownFileIcon from '../../Icons/UnknownFileIcon.svg';
import JPEGIcon from '../../Icons/JPEGIcon.svg';

import MainNavBar from './MainNavBar.js';


/**
 * An individual File Icon object, that represents a file from the backend.
 * @class
 * @name FileIcon
 */
class FileIcon extends React.Component {
	update = (current_dir, goback) => {
        this.props.navbar.trackDirNavigation(current_dir)
		this.props.parentCallback(current_dir, goback)
	}

	constructor(props) {
		super(props);
//		console.log("fileicon props: " + props.fullFileName)
//		console.log("redirect: " + this.props.suggestedRedirect)
//		console.log("currentDir: " + this.props.currentDir)
//		console.log("currentDirSLICED: " + this.props.currentDir.slice(0, this.props.currentDir.length - props.fullFileName.length))

        this.navbar = this.props.navbar;
		this.clickContextMenu = this.clickContextMenu.bind(this);

		this.state = {
			dir: this.props.currentDir,
			contextMenu: null,
			iconImage: UnknownFileIcon,
			fileContentsDisplay: null,
		};
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

		if ("txt".localeCompare(this.props.extension.toLowerCase()) === 0) {
			this.setState({ iconImage: TXTIcon });
		} else if ("mp4".localeCompare(this.props.extension.toLowerCase()) === 0) {
			this.setState({ iconImage: MP4Icon });
		} else if ("pdf".localeCompare(this.props.extension.toLowerCase()) === 0) {
			this.setState({ iconImage: PDFIcon });
		} else if ("png".localeCompare(this.props.extension.toLowerCase()) === 0) {
			this.setState({ iconImage: PNGIcon });
		} else if ("jpeg".localeCompare(this.props.extension.toLowerCase()) === 0 || "jpg".localeCompare(this.props.extension.toLowerCase()) === 0) {
			this.setState({ iconImage: JPEGIcon });
		} else if ("directory".localeCompare(this.props.type.toLowerCase()) === 0) {
			this.setState({ iconImage: FolderIcon });
		}

	}

	/**
	* Attempts to display the file content based on the extension.
	* @function
	* @name displayContent
	*/
	displayContent() {
		var temp = this.state.dir.toString();
	 	temp = temp.split(':').join('%3A');
		temp = temp.split('/').join('%2F');
		temp = temp.split('\\').join('%5C');
		if ("txt".localeCompare(this.props.extension.toLowerCase()) === 0) {
		    this.props.navbar.loadViewFileContents("http://localhost:8080/file/txt/?file=" + temp + '%2F' + this.props.fullFileName,
		    "http://localhost:8080/tag/suggest/?filePath=" + temp + '%2F' + this.props.fullFileName, this.props.fullFileName, this.state.dir.toString(), this.props.extension);
//			this.setState({
//				fileContentsDisplay: <ContentDisplayBox
//					source={"http://localhost:8080/file/txt/?file=" + temp + '%2F' + this.props.fullFileName}
//					disable={() => this.disableContentDisplay()}
//				/>
//			});
		} else if ("mp4".localeCompare(this.props.extension.toLowerCase()) === 0 || "webm".localeCompare(this.props.extension.toLowerCase()) === 0) {
		    this.props.navbar.loadViewFileContents("http://localhost:8080/file/mp4/?file=" + temp + '%2F' + this.props.fullFileName,
		    "http://localhost:8080/tag/suggest/?filePath=" + temp + '%2F' + this.props.fullFileName, this.props.fullFileName, this.state.dir.toString(), this.props.extension);
//			this.setState({
//				fileContentsDisplay: <ContentDisplayBox
//					source={"http://localhost:8080/file/mp4/?file=" + temp + "%2F" + this.props.fullFileName}
//					disable={() => this.disableContentDisplay()}
//				/>
//			});
		} else if ("pdf".localeCompare(this.props.extension.toLowerCase()) === 0) {
		    this.props.navbar.loadViewFileContents("http://localhost:8080/file/pdf/?file=" + temp + '%2F' + this.props.fullFileName,
		    "http://localhost:8080/tag/suggest/?filePath=" + temp + '%2F' + this.props.fullFileName, this.props.fullFileName, this.state.dir.toString(), this.props.extension);
//			this.setState({
//				fileContentsDisplay: <ContentDisplayBox
//					source={"http://localhost:8080/file/pdf/?file=" + temp + "%2F" + this.props.fullFileName}
//					disable={() => this.disableContentDisplay()}
//				/>
//			});
		} else if ("png".localeCompare(this.props.extension.toLowerCase()) === 0) {
		    this.props.navbar.loadViewFileContents("http://localhost:8080/file/png/?file=" + temp + '%2F' + this.props.fullFileName,
		    "http://localhost:8080/tag/suggest/?filePath=" + temp + '%2F' + this.props.fullFileName, this.props.fullFileName, this.state.dir.toString(), this.props.extension);
//			this.setState({
//				fileContentsDisplay: <ContentDisplayBox
//					source={"http://localhost:8080/file/png/?file=" + temp + "%2F" + this.props.fullFileName}
//					disable={() => this.disableContentDisplay()}
//				/>
//			});
		} else if ("jpeg".localeCompare(this.props.extension.toLowerCase()) === 0 || "jpg".localeCompare(this.props.extension.toLowerCase()) === 0) {
		    this.props.navbar.loadViewFileContents("http://localhost:8080/file/jpeg/?file=" + temp + '%2F' + this.props.fullFileName,
		    "http://localhost:8080/tag/suggest/?filePath=" + temp + '%2F' + this.props.fullFileName, this.props.fullFileName, this.state.dir.toString(), this.props.extension);
//			this.setState({
//				fileContentsDisplay: <ContentDisplayBox
//					source={"http://localhost:8080/file/jpeg/?file=" + temp + "%2F" + this.props.fullFileName}
//					disable={() => this.disableContentDisplay()}
//				/>
//			});
		} else if ("mp3".localeCompare(this.props.extension.toLowerCase()) === 0 || "m4a".localeCompare(this.props.extension.toLowerCase()) === 0 || "wav".localeCompare(this.props.extension.toLowerCase()) === 0) {
		    console.log("happening")
		    this.props.navbar.loadViewFileContents("http://localhost:8080/file/mp3/?file=" + temp + '%2F' + this.props.fullFileName,
		    "http://localhost:8080/tag/suggest/?filePath=" + temp + '%2F' + this.props.fullFileName, this.props.fullFileName, this.state.dir.toString(), this.props.extension);
        }
		else if ("directory".localeCompare(this.props.type) === 0) {
			this.update(this.props.currentDir + '%2F' + this.props.fullFileName, true)
		}
	}

	/**
	* This is a handler for disabling the file content display box.
	* @function
	* @name disableContentDisplay
	*/
	disableContentDisplay() {
		this.setState({ fileContentsDisplay: null });
	}

	/**
	* This is a handler for disabling default context menus and creating custom right click functionality
	* @function

	* @name contextMenu
	*/
	clickContextMenu(e) {
		e.preventDefault();
		this.setState({
			contextMenu: <RightClickMenu
				disable={() => this.disableContextMenu()}
				displayContent={() => this.displayContent()}
				dir={this.state.dir + '%2F' + this.props.fullFileName}
				filename={this.props.fullFileName}
				navbar={this.props.navbar}
				XPos={e.screenX}
				YPos={e.screenY}
			/>
		});

	}

	/**
	* This is a handler for disabling the custom right click functionality
	* @function

	* @name disableContextMenu
	*/
	disableContextMenu() {
		this.setState({
			contextMenu: null
		});
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
						onClick={() => {
//						    console.log("click from onclick render function bro");
						    this.displayContent()
						}}
						onContextMenu={this.clickContextMenu} 
						variant="top" height="20%" 
						src={this.state.iconImage} />
					<Card.Body>
						<Card.Title>{this.props.fullFileName}</Card.Title>
					</Card.Body>
					
					{this.state.fileContentsDisplay}
					{this.state.contextMenu}
				</Card>
			);
	}
}

export default FileIcon; 