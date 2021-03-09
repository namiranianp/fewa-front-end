import React from 'react';
import '../../css/MainNavBar.css';

import DisplayFiles from './DisplayFiles.js';
import LogIn from './LogIn.js';
import Help from './Help.js';
import Settings from './Settings.js';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

/**
 * Handle the primary top navigation bar of the web application.
 * @class
 * @name MainNavBar
 */
class MainNavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageContents: <DisplayFiles />
		};
	}

	/**
	* Load the page which displays the various files fetched from the back end.
	* @function
	* @name loadDisplayFiles
	*/
	loadDisplayFiles() {
		this.setState({ pageContents: <DisplayFiles /> });
	}

	/**
	* Load the page which adds in login and signup functionality.
	* @function
	* @name loadLogIn
	*/
	loadLogIn() {
		this.setState({ pageContents: <LogIn /> });
	}

	/**
	* Load the page which saves the current session.
	* @function
	* @name loadSaveSession
	*/
	loadSaveSession() {
		this.setState({ pageContents: <div /> });
	}

	/**
	* Load the page which contains all the help information.
	* @function
	* @name loadHelp
	*/
	loadHelp() {
		this.setState({ pageContents: <Help /> });
	}

	/**
	* Load the page which allows the user to toggle specific settings.
	* @function
	* @name loadSettings
	*/
	loadSettings() {
		this.setState({ pageContents: <Settings /> });
	}

	/**
	* Update the DOM with the rendered component.
	* @function
	* @name render
	*/
	render() {

		return (
			<div>
				<Navbar id="stayOnTop" bg="dark" variant="dark">

					<Navbar.Brand>File Explorer Web App</Navbar.Brand>

					<Nav className="mr-auto" />

					<NavDropdown active title="Menu" id="collasible-nav-dropdown">
						<NavDropdown.Item onClick={() => this.loadDisplayFiles()}>Home</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadLogIn()}>Log-In / Sign Up</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadSaveSession()}>Save Session</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadHelp()}>Help</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={() => this.loadSettings()}>Settings</NavDropdown.Item>
					</NavDropdown>

					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="dark">Search</Button>
					</Form>

				</Navbar>

				{this.state.pageContents}

			</div>
		);
	}
}

export default MainNavBar;