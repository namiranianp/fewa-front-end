import React from 'react';
import '../../css/Upload.css';

class Upload extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
        };
    }

    handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
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

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                            <div className="form-group files color">
                                <label>Upload Your File </label>
                                <input type="file" className="form-control" name="file" onChange={this.handleUpload}/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload;