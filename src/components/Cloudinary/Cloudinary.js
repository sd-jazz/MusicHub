import React, {Component} from 'react';

class Cloudinary extends Component {
    constructor(props){
        super(props)
        this.state = {
            uploadedFileCloudinaryUrl: ""
        }
    }

handleImageUpload = (file) => {

    // Initiates signature request from the server when someone has uploaded a file 
    axios.get('/api/upload').then(response => {

        let formData = new FormData();
        formData.append("signature", response.data.signature)
        formData.append("api_key", "262651599613782");
        formData.append("timestamp", response.data.timestamp)
        formData.append("file", file[0])

        // You can either save that url in your database or display it directly on the page 
        axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
            this.setState({
                uploadedFileCloudinaryUrl: response.data.secure_url
                })
            }).catch( err => {
            console.log(err);
            })
    
        })
        
    }

    render(){
        return (
            <div></div>
        )
    }

}

    export default Cloudinary;