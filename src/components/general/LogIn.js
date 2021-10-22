import React from 'react';
import '../../css/LogIn.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/**
 * Displays the Log In screen information
 * @class
 * @name LogIn
 */
class LogIn extends React.Component {
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
			<div id="half">

				<h1>Log In / Sign Up</h1>

				<Form>

					<Form.Group controlId="formUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="New Username" />
					</Form.Group>

					<Form.Group controlId="formPassword">
						<Form.Label>New Password</Form.Label>
						<Form.Control type="password" placeholder="New Password" />
					</Form.Group>

					<Form.Group controlId="formConfirmPassword">
						<Form.Control type="password" placeholder="Confirm Password" />
					</Form.Group>

					<Form.Group controlId="formEncryptSaveCheckbox">
						<Form.Label>Encrypt Save File</Form.Label>
						<Form.Check type="switch" label="Encrypt Save File" />
					</Form.Group>

					<Form.Group controlId="formSendLinkCheckbox">
						<Form.Label>Send Links Through URL</Form.Label>
						<Form.Check type="switch" label="Send Links Through URL" />
					</Form.Group>

					<Form.Group controlId="formEncryptFileCheckbox">
						<Form.Label>Encrypt File Locations</Form.Label>
						<Form.Check type="switch" label="Encrypt File Locations" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Update Information
					</Button>

				</Form>
			</div>
		);
	}
}

export default LogIn;