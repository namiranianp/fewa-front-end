import React from 'react';
//import '/src/css/Form.css';

class Form extends React.Component {
	constructor(props) {

		super(props);
		this.state = { value: "namiranianp" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		
		fetch('https://api.github.com/users/' + this.state.value + '/repos')
			.then(response => response.json())
			.then(data => data.map(user => {
				
				document.getElementById("testText").innerHTML = 
				"Most recent public Github repo: " + user.name +
				"<br>Description: " + user.description +
				"<br>Created On: " + user.created_at +
				"<br>Last Updated On: " + user.updated_at +
				"<br>Language Written In: " + user.language +
				"<br>Number of People Currently Watching This Repo: " + user.watchers;
				
	            return (
	              <div></div>
	            );
			}));
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