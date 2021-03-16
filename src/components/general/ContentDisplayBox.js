import React from 'react';
import '../../css/ContentDisplayBox.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

/**
 * Fetches and displays the file contents using a little box.
 * @class
 * @name ContentDisplayBox
 */
class ContentDisplayBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};

	}

	/**
	* Update the DOM with the rendered component.
	* @function
	* @name render
	*/
	render() {

		return (
			<Card id="overlay" border="dark" className="text-right">
				<Card.Header>
					<Button onClick={() => this.props.disable()} variant="danger">X</Button>
				</Card.Header>
				<Card.Body>
					<iframe title="File Content Viewer" src={this.props.source}></iframe>
				</Card.Body>
			</Card>
		);
	}
}

export default ContentDisplayBox;