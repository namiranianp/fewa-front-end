import React from 'react';
import './css/Form.css';

class Form extends React.Component {
	constructor(props) {

		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		fetch('https://api.github.com/users/' + this.state.value + '/repos')
			.then(response => response.json())
			.then(data => document.getElementById("testText").innerHTML = JSON.stringify(data));
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Github Username:
    				<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Form;