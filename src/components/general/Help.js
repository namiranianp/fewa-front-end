import React from 'react';
import '../../css/Help.css';

/**
 * Displays the Help screen information
 * @class
 * @name Help
 */
class Help extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	/**
	* Update the DOM with the rendered component.
	* @function
	* @name render
	*/
	render() {
		const mystyle = {
			color: "red",
	        padding: "10px"
   		 };
		return (
			<div id="half">

				<h1 style={mystyle}>Postgresql Installation <a href= "https://www.postgresql.org/download/">https://www.postgresql.org/download/</a> </h1>


			</div>
		);
	}
}

export default Help;