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

    // handleUpload(){
    //     fetch("http://localhost:8080/upload/?filePath=" + this.props.filePath + "/?finalPath=" + this.props.finalPath)
    //     .then(resp => resp.blob())
    //     .then(blob => {
    //         const url = window.URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.style.display = 'none';
    //         a.href = url;
    //         // the filename you want
    //         a.upload = this.finalPath;//get the file name
    //         document.body.appendChild(a);
    //         a.click();
    //         window.URL.revokeObjectURL(url);
    //     alert('File has successfully uploaded');
    //     })
    //     .catch(() => alert('File failed to upload'));
    // }

    handleUpload = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        fetch('http://localhost:8080/upload', {
            method: 'post',
            body: formData
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    };


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
            // <div class="container">
            //     <h1>Upload</h1>
            //     <p>To upload a file, please enter the <span>file path</span> on your device and the <span>destination</span> to place the file in the database</p>
            //     <ButtonGroup>
            //             <FormControl type="text" placeholder="File Path"
            //                 value={this.state.value}
            //                 onChange={(event) => {this.loadPath(event);this.handleSubmit(event);}}/>
            //             <FormControl type="text" placeholder="Destination"
            //                 value={this.state.value}
            //                 onChange={(event) => {this.loadFinal(event);this.handleSubmit(event);}}/>
            //             <Button variant="success" onClick={() => {this.handleUpload()}}>Upload</Button>
            //     </ButtonGroup>
            // </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                            <div className="form-group files color">
                                <label>Upload</label>
                                <input type="file" className="form-control" name="file" onChange={this.handleUpload}/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload;