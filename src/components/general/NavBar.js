import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../css/NavBar.css';

class FileIcon extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
				
					<Navbar.Brand href="">File Explorer Web App</Navbar.Brand>
					
					<Nav className="mr-auto" />
					
					<NavDropdown active title="Menu" id="collasible-nav-dropdown">
						<NavDropdown.Item href="">Home</NavDropdown.Item>
						<NavDropdown.Item href="">Log-In / Sign Up</NavDropdown.Item>
						<NavDropdown.Item href="">Save Session</NavDropdown.Item>
						<NavDropdown.Item href="">Help</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="">Settings</NavDropdown.Item>
					</NavDropdown>
					
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="dark">Search</Button>
					</Form>
					
				</Navbar>
				<br />
			</div>
		);
	}
}

export default FileIcon;