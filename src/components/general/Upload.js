import React from 'react';
import '../../css/Upload.css';


import FormControl from 'react-bootstrap/FormControl';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Upload extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
        };
    }

    handleSubmit = (event) => {
    	event.preventDefault();
    }

    handleUpload(){
        fetch("http://localhost:8080/upload/?filePath=" + this.props.dir)
        .then(resp => resp.blob())
        .then(blob => {
            //TODO: and a whole bunch of other stuff
        alert('File has successfully uploaded');
        })
        .catch(() => alert('File failed to upload'));
        }
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
            <div class="container">
                <h1>Upload</h1>
                <p>To upload a file, please enter the <span>file path</span> on your device and the <span>destination</span> to place the file in the database</p>
                <ButtonGroup>
                        <FormControl type="text" placeholder="File Path"
                            value={this.state.value}
                            onChange={(event) => {this.loadPath(event);this.handleSubmit(event);}}/>
                        <FormControl type="text" placeholder="Destination"
                            value={this.state.value}
                            onChange={(event) => {this.loadFinal(event);this.handleSubmit(event);}}/>
                        <Button variant="success" onClick={() => {this.handleUpload()}}>Upload</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Upload;