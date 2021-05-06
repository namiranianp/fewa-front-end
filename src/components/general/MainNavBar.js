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
			dir: 'test',
			current_dir: null,
			lastDir: null,
			pageContents: <DisplayFiles rootDir = {this.current_dir}/>,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.childKey = 0;
	}

	loadDir = (event) => {
		this.setState({
			dir : event.target.value
		});
		// alert("", event.target.value);
		console.log("Comming from event, root dir =", this.state.dir);
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		/**  const dir = this.state.dir;
		console.log('The root dir is: ', dir);
		this.loadDisplayFiles();
		console.log('The state dir is: ', this.state.dir); */
	}
	/**
	TODO: key value? might be a problem?
	 */

	handleGoBack() {
		++this.childKey;
		this.setState({
			lastDir: this.state.current_dir, 
			pageContents: <DisplayFiles key={this.childKey} rootDir = {this.state.dir}/>
			} );
	}

	/**
	* Load the page which displays the various files fetched from the back end.
	* @function
	* @name loadDisplayFiles
	*/
	loadDisplayFiles() {
		++this.childKey;
		this.setState({ current_dir: this.state.dir, pageContents: <DisplayFiles key={this.childKey} rootDir = {this.state.dir}/> });
		//this.setState({pageContents: null});
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
					<Form inline onSubmit={this.handleSubmit}>
						<Button variant="dark" onClick={() => this.handleGoBack()}>Go Back</Button>
						<FormControl type="text" placeholder="Enter your root directory" value={this.state.value} onChange={(event) => {this.loadDir(event);this.handleSubmit(event);}}/>
						<Button variant="dark" onClick={() => this.loadDisplayFiles()}>Enter</Button>
					</Form> 
					<Nav className="mr-auto" />

					<Form inline>
						<Button variant="dark">Search</Button>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					</Form>
					
					<NavDropdown active title="Menu" id="collasible-nav-dropdown">
						<NavDropdown.Item onClick={() => this.loadDisplayFiles()}>Home</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadLogIn()}>Log-In / Sign Up</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadSaveSession()}>Save Session</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadHelp()}>Help</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={() => this.loadSettings()}>Settings</NavDropdown.Item>
					</NavDropdown>


				</Navbar>
				
				 {this.state.pageContents}
			</div>
		);
	}
}

export default MainNavBar;