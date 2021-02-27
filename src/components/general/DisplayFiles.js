import React from 'react';

class DisplayFiles extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
			isLoaded: false,
			files: []
		};
		
	}

	componentDidMount() {
		fetch("http://localhost:8080/jsontest/jsontest")
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
						isLoaded: true,
						error
					});
				}
			)
	}

	render() {
		
		const {
			error,
			isLoaded,
			files
		} = this.state;
		
		if (error) {
			
			return <div>Error Occurred: {error.message}</div>;
			
		} else if (!isLoaded) {
			
			return <div>Please Wait...</div>;
			
		} else {
			return (
				<ul>
					<ul>
						{files.map(item => (
							<li key={item.name}>
								Name: {item.name}, File or Directory: {item.type}
							</li>
						))}
					</ul>
				</ul>
			);
		}
	}
}
export default DisplayFiles;