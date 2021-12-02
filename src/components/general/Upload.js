import React from 'react';
import '../../css/Upload.css';

import UploadIcon from '../../Icons/upload_icon.png';

class Upload extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
        };
    }

    handleUpload = (e) => {

//TODO: code for multifile upload -- replace other code with this once backend is working
//        const formData = new FormData();
//        for(let i = 0; i< e.target.files.length; i++) {
//             formData.append('file', e.target.files[i])
//        }
//        ApiService.upload(formData)
//             .then(res => {
//                console.log(res.data);
//                alert("File uploaded successfully.")
//             })

        e.preventDefault();
        const formData = new FormData();
        for(let i = 0; i< e.target.files.length; i++) {
            formData.append('file', e.target.files[i])
        }
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
                    <div className="col">
                            <div className="form-group files color">
                                <h1>Upload</h1>
                                <label>select or drag a file below</label>
                                <br/>
                                <img src={UploadIcon} className="upload-icon"/>
                                <input type="file" className="form-control" name="file" onChange={this.handleUpload}/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload;