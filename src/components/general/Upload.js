import React from 'react';
import '../../css/Upload.css';


import FormControl from 'react-bootstrap/FormControl';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class Upload extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
        };
    }

    handleSubmit = (event) => {
    	event.preventDefault();
    }

//TODO:
    handleUpload(){

    }


    //handles submission of location on device
    loadPath = (event) => {
    	this.setState({
    		filePath: event.target.value
    	})
    }

    //handles submission of location to place in database
    loadFinal = (event) => {
        this.setState({
   		finalPath: event.target.value
        })
    }

    render(){
        return(
//            <ButtonGroup vertical id="menuOverlay"
//                onMouseLeave={() => { this.props.disable() }}
//                style={{ left: this.props.XPos - 20, top: this.props.YPos - 120 }}>

            <ButtonGroup>
                	<FormControl type="text" placeholder="Enter the file path on your device"
                		value={this.state.value}
                		onChange={(event) => {this.loadPath(event);this.handleSubmit(event);}}/>
                	<FormControl type="text" placeholder="Enter the final location to place file"
                        value={this.state.value}
   						onChange={(event) => {this.loadFinal(event);this.handleSubmit(event);}}/>
                	<Button variant="success" onClick={() => {this.handleUpload()}}>Upload</Button>
            </ButtonGroup>
        )
    }
}

export default Upload;