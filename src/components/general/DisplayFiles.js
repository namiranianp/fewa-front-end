import React from 'react';
import '../../css/DisplayFiles.css';

import LoadingSpinner from './LoadingSpinner.js';
import FileIcon from './FileIcon.js';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * The main way to fetch files from the backend and display them.
 * @class
 * @name DisplayFiles
 */
class DisplayFiles extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dir: this.props.rootDir,
			curr_dir: '',
			error: null,
			back: false,
			isLoaded: false,
			files: []
		};

	}
	
	callback = (current_dir, goback) => {
		console.log("CALL BACK HERE")
		fetch('http://localhost:8080/path/getfiles/?dir=' + current_dir)
		.then(response => response.json())
		.then(
		(result) => {
			this.setState({
				dir: current_dir,
				isLoaded: true,
				files: result.files
			});
		},
		(error) => {
			this.setState({
				dir: null,
				isLoaded: true,
				error
			});
		}
		)
	}
	
	/**
	* Is automatically called when this component successfully mounts.
	* In this case, it is used to fetch the file information from the backend. "http://localhost:8080/seed/?dir=C%3A%5CUsers%5CKevin%5CDocuments%5Ctest%5Ctest-1"
	* @function
	* @name componentDidMount
	*/
	componentDidMount() {
		
		if (typeof this.state.dir === 'undefined') {
			console.log('UNDEFINED dir DETECTED')
			return			
		} 

		//	this.replaceChar()
		var temp = this.state.dir;
		if (typeof this.props.changeDir !== 'undefined') {
			temp += '%2F' + this.props.current_Dir
		}
		temp = temp.toString();
	 	temp = temp.split(':').join('%3A');
		temp = temp.split('/').join('%2F');
		temp = temp.split('\\').join('%5C');
		
		if (this.props.goback) {
			temp = temp.split('%5C')
			temp.pop();
			temp = temp.join('%5C')
		}		
		this.setState({dir: temp});
		if (this.props.search) {

			var url = 'http://localhost:8080/search/name/?file='

			if (this.props.byTag) {
				url = 'http://localhost:8080/search/tag/?tag='
			}
			console.log("???????????????????Search Query: ", this.props.query);
			//fetch('http://localhost:8080/search/tag/?tag=' + this.props.query)
			fetch(url + this.props.query)
			.then(response => response.json())
			.then(
			(result) => {
				this.setState({
					isLoaded: true,
					files: result.files
				});
			},
			(error) => {
				this.setState({
					dir: null,
					isLoaded: true,
					error
				});
			}
		)
		} else {
			
			console.log("=================DisplayFiles state DIR: ", this.state.dir);
			if (this.state.dir == "files/database") {
				var seed = 'http://localhost:8080/path/database/?dir=';
			} else {
				var seed = 'http://localhost:8080/path/setseed/?dir=';
			}
			fetch(seed + temp)
				.then(response => response.json())
				.then(
					(result) => {
						this.setState({
							dir: temp,
							isLoaded: true,
							files: result.files
						});
					},
					(error) => {
						this.setState({
							dir: null,
							isLoaded: true,
							error
						});
					}
				)
		}
		this.setState({back: false})
	}
		
	handleGoBack() {
		console.log("_________here is go back is DisplayFiles")
		var temp = this.state.dir.split('%5C')
		temp.pop();
		temp = temp.join('%5C')
		
		this.setState({
			dir: temp,
			back: true
			}, function () {
				//console.log('This is suppose to be last dir:', this.state.dir)
				fetch('http://localhost:8080/path/getfiles/?dir=' + temp)
				.then(response => response.json())
				.then(
				(result) => {
					this.setState({
						isLoaded: true,
						files: result.files
					});
				},
				(error) => {
					this.setState({
						dir: null,
						isLoaded: true,
						error
					});
				}
			)
			});
	}

	/**
	* Update the DOM with the rendered component.
	* @function
	* @name render
	*/
	render() {

		const {
			dir,
			error,
			isLoaded,
			files
		} = this.state;

		if (error) {
			
			return (
				
				<div />
			);

		} else if (!isLoaded) {

			return (
				<LoadingSpinner />
			);

		} else if (dir === '') {
			return React.createElement(
				'div',
				{id: 'center', className: 'center'},
				React.createElement('h1', null, 'Please Enter a Valid Root Directory!')
			)
		}  else if (typeof files !== 'undefined') {
			
			return (
				<div>
				<Button variant="dark" onClick={() => this.handleGoBack()}>Go Back</Button>
				<Container>
				<br />
					<Row>
						{files.map(item => (
							<Col md="auto" key={item.fullName}>
								<FileIcon 
									fullFileName={item.fullName} 
									extension={item.extension} 
									type={item.type} 
									currentDir = {this.state.dir} 
									parentCallback = {this.callback}/>
							</Col>
						))}
					</Row>
				</Container>
				</div>
			);
		}
		else {
			return (
				<div/>
			)
		}
	}
}
export default DisplayFiles;