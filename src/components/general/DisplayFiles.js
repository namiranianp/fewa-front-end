import React from 'react';

class DisplayFiles extends React.Component {
	constructor(props) {

		super(props);

	}

	render() {
		
		fetch('http://localhost:8080/test/test?msg=text.txt')
			.then(response => response.text().then(function(text) {
      		document.getElementById("testText").innerHTML = text;
			}));
		
		return (
			<div></div>
		);
	}
}

export default DisplayFiles;