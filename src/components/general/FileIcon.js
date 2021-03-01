import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../css/FileIcon.css';
import TXTIcon from '../../Icons/TXTIcon.svg';
import FolderIcon from '../../Icons/FolderIcon.svg';
import MP4Icon from '../../Icons/MP4Icon.svg';
import PDFIcon from '../../Icons/PDFIcon.svg';
import PNGIcon from '../../Icons/PNGIcon.svg';
import UnknownFileIcon from '../../Icons/UnknownFileIcon.svg';
import JPEGIcon from '../../Icons/JPEGIcon.svg';

class FileIcon extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		var image;

		if ("txt".localeCompare(this.props.extension) === 0) {
			image = TXTIcon;
		} else if ("mp4".localeCompare(this.props.extension) === 0) {
			image = MP4Icon;
		} else if ("pdf".localeCompare(this.props.extension) === 0) {
			image = PDFIcon;
		} else if ("png".localeCompare(this.props.extension) === 0) {
			image = PNGIcon;
		} else if ("jpeg".localeCompare(this.props.extension) === 0) {
			image = JPEGIcon;
		} else if ("directory".localeCompare(this.props.type) === 0) {
			image = FolderIcon;
		} else {
			image = UnknownFileIcon;
		}

		return (
			<Card border = "light" style={{ width: '8rem' }}>
				<Card.Img variant="top" src={image} height="20%"/>
				<Card.Body>
					<Card.Title>{this.props.fullFileName}</Card.Title>
				</Card.Body>
			</Card>
		);
	}
}

export default FileIcon;