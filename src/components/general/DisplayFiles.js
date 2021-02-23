import React from 'react';

class DisplayFiles extends React.Component {
	constructor(props) {

		super(props);

	}

	render() {
		
		fetch('http://localhost:8080/test/test?msg=yourMessage')
			.then(response => response.json())
			.then(data => JSON.stringify(data))
			.then(string => document.getElementById("testText").innerHTML = string);
			/*
			.then(data => data.map(user => {
				
	            return (
	              <div></div>
	            );

			}));*/
		
		return (
			<div></div>
		);
	}
}

export default DisplayFiles;