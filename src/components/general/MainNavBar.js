import React from 'react';
import '../../css/MainNavBar.css';

import DisplayFiles from './DisplayFiles.js';
import LogIn from './LogIn.js';
import Help from './Help.js';
import Settings from './Settings.js';
import ViewFileContents from './ViewFileContents.js';

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
			query: '',
			checked: false,
			pageContents: <DisplayFiles goback = {this.if_go_back} rootDir = {this.current_dir} navbar = {this} />,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.childKey = 0;
	}

	loadDir = (event) => {
		this.setState({
			dir : event.target.value
		});
	}

	handleSearch = (event) => {
		this.setState({
			query: event.target.value
		}, function() {
			console.log("QUERY: ", this.state.query)
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
	}

	handleCheck = (event) => {
		this.setState({
			checked: event.target.checked
		})
	}

	loadSearchResult() {
		this.setState({
			pageContents: <DisplayFiles
							byTag={this.state.checked}
							query={this.state.query}
							rootDir = {this.state.dir}
							search={true}
							/>
		})
	}

	/**
	* Load the page which displays the various files fetched from the back end.
	* @function
	* @name loadDisplayFiles
	*/
	loadDisplayFiles() {
		++this.childKey;
		this.setState({
			current_dir: this.state.dir,
			if_go_back: false,
			pageContents: <DisplayFiles key={this.childKey}
			rootDir = {this.state.dir}
			navbar = {this}/>
		});
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
	* Load the page which allows the user to toggle specific settings.
	* @function
	* @name loadSettings
	*/
	loadViewFileContents(source, suggested, filename) {
		this.setState({ pageContents: <ViewFileContents source = {source} suggested = {suggested} filename = {filename}/> });
	}

	/**
	* Update the DOM with the rendered component.
	*
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
						<FormControl type="text" placeholder="Enter your root directory" value={this.state.value} onChange={(event) => {this.loadDir(event);this.handleSubmit(event);}}/>
						<Button variant="dark" onClick={() => this.loadDisplayFiles()}>Enter</Button>
					</Form>
					<Nav className="mr-auto" />

					<NavDropdown active title="Menu" id="collapsible-nav-dropdown">
						<NavDropdown.Item onClick={() => this.loadDisplayFiles()}>Home</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadLogIn()}>Log-In / Sign Up</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadSaveSession()}>Save Session</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadHelp()}>Help</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={() => this.loadSettings()}>Settings</NavDropdown.Item>
						<NavDropdown.Item onClick={() => this.loadViewFileContents()}>View File Contents</NavDropdown.Item>
					</NavDropdown>

					<Form inline onSubmit={this.handleSubmit}>
						<Form.Check inline label="Search By Tags" checked={this.state.checked} onChange={(event) => this.handleCheck(event)} />
						<Button variant="dark" onClick={() => this.loadSearchResult()}>Search</Button>
						<FormControl type="text" placeholder="Search" className="mr-sm-2"
							value={this.state.value} onChange={(event) => {this.handleSearch(event);this.handleSubmit(event);}} />
					</Form>
				</Navbar>
				
				 {this.state.pageContents}
			</div>
		);
	}
}

export default MainNavBar;