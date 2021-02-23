import React from 'react';
//import '/src/css/Button.css';

export class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Button">
				<h1>Hiya</h1>
			</div>
		);
	}
}

export class SearchButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Button">
				<h1>Search</h1>
			</div>
		);
	}
}

export class DirectoryButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Button">
				<h1>Directory</h1>
			</div>
		);
	}
}

export class MenuButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Button">
				<h1>Menu</h1>
			</div>
		);
	}
}