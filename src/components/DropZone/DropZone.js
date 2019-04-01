import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
// const CLOUDINARY_UPLOAD_PRESET = 'ahhubrf1';
// const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/saturnslist/upload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/musichub/upload';


export default class DropZone extends Component {
    constructor(props){
        super(props)
        this.state = {
            uploadedFile:'',
            uploadedFileCloudinaryUrl: ''
        }
        this.onImageDrop = this.onImageDrop.bind(this);
    }

    // Triggers when object (image) is dropped onto the target
    onImageDrop = (files) => {
        this.setState({
          uploadedFile: files[0]
        });
    
        this.handleImageUpload(files[0]);
      }

    // Initiates signature request from the server when someone has uploaded a file 
      handleImageUpload(file) {

        let upload = axios.post(CLOUDINARY_UPLOAD_URL)
          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
          .field('file', file);
    
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
              
              if(this.props.upload == 'profile'){
                this.props.newImage(response.body.secure_url)
                this.props.getImage(response.body.secure_url)

              }else if(this.props.upload == 'item'){

                this.props.getImage(response.body.secure_url)
              }
              response.body.secure_url
          }
        });
      }

    render() {
        return (
            <div className='upload-form'>
            <Dropzone
                // Cannot drop multiple files at once 
                multiple={false}
                // Only accepts image files 
                accept="image/*"
                // triggers onImageDrop() when file is dropped onto the target 
                onDrop={this.onImageDrop}>
                <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            </div>
        );
    }
}