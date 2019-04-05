import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import "./modal.css"
import MappedImages from './MappedImages';
// import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser } from "../../redux/reducer";
import axios from "axios";
import Dropzone from 'react-dropzone';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dtmyvlymm/image/upload';
// const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/85016.json?access_token=pk.eyJ1IjoiYmNrZW5uZWR5OTciLCJhIjoiY2p0eHV6a3dzMXR0cjQ1bXAzY2M4N2IyZyJ9.WS1Qf8wiBeDFOhFh5S-pzw'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: null,
      category: "",
      type: "",
      condition: "",
      uploadedFile:'',
      cloudinaryUrl: [],
      zipcode: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  uploadItem = () => {
    // console.log("CLOUDINARY URL DURING UPLOAD", this.state.cloudinaryUrl)
    const post = {
      user_id: this.props.user.user_id,
      listing_name: this.state.title,
      description: this.state.description,
      time_stamp: new Date(),
      type: this.state.type,
      price: this.state.price,
      condition: this.state.condition,
      images: this.state.cloudinaryUrl,
      zipcode: this.state.zipcode,
    };

    if (
      this.state.title &&
      this.state.price &&
      this.state.description &&
      this.state.zipcode &&
      this.state.condition &&
      this.state.cloudinaryUrl.length>=1 &&
      this.state.category === "other"
    ) {
      post.type = this.state.category;
      axios.post(`/api/listings`, post).then(res => {
        console.log("POST", post)
        this.props.close();
      });
    } else if (
      this.state.title &&
      this.state.price &&
      this.state.description &&
      this.state.zipcode &&
      this.state.condition &&
      this.state.cloudinaryUrl.length>=1 &&
      this.state.type
    ) {
      console.log(this.state);
      axios.post(`/api/listings`, post).then(res => {
        console.log("POST", post)
        this.props.close();
        this.props.history.push("/user");
        
      });
    } else {
      alert("incomplete form");
    }
  };

      // Triggers when object (image) is dropped onto the target
      onImageDrop = (files) => {
        console.log("onImageDrop FILES", files)
        this.setState({
          uploadedFile: files[0]
        });
        
        this.handleImageUpload(files[0]);
      }

      handleImageUpload = (file) => {

        // Initiates signature request from the server when someone has uploaded a file 
        console.log("handleImageUpload START", "FILE", file)
        axios.get('/api/upload').then(response => {
            console.log("RESPONSE", response, "RESPONSE.DATA.SIGNATURE", response.data.signature)
            let formData = new FormData();
            formData.append("signature", response.data.signature)
            formData.append("api_key", "262651599613782");
            formData.append("timestamp", response.data.timestamp)
            formData.append("file", file)
            // const config = {
            //   headers: { "X-Requested-With": "XMLHttpRequest" },
            // }
            console.log("FORM DATA AFTER AXIOS.GET", formData)
            
            // You can either save that url in your database or display it directly on the page 
            axios.post(CLOUDINARY_UPLOAD_URL, formData/*, config*/).then(response => {
              console.log("response.data.secure_url", response.data.secure_url, "STATE", this.state)
                this.setState({
                    cloudinaryUrl: [...this.state.cloudinaryUrl, response.data.secure_url]
                })
            }).catch( err => {
              console.log("RIP MY AXIOS.POST CALL", err);
            })
        
        })
      }

        login = () => {
          const redirectUri = encodeURIComponent(`${window.location.origin}/auth`);
          window.location = `https://${
            process.env.REACT_APP_AUTH_DOMAIN
          }/authorize?client_id=${
            process.env.REACT_APP_CLIENT_ID
          }&scope=openid%20email%20profile&redirect_uri=${redirectUri}&response_type=code`;
        };

        getCoords = () => {
          navigator.geolocation.getCurrentPosition((position)=>{
            if(navigator.geolocation){
              console.log(position.coords)
            }else{
              alert("geolocation not available", position.code)
            }
          })
          // axios.get(mapbox).then(res=>{
          //   console.log(res.data.features[0].center[0])
          //   this.setState({
          //     longitude: res.data.features[0].center[0],
          //     latitude: res.data.features[0].center[1]
          //   })
          //   console.log(this.state.longitude, this.state.latitude)
          // })
        }
      
      
  render() {
    return (
      <div className="modal__outerContainer">
        {this.props.user ? (
          <div id="modal">

        <Dropzone  onDrop={this.onImageDrop} accept="image/*"multiple={false}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p id="dropzone">Click to select files, or drop file here</p>
            </div>
          </section>
        )}
      </Dropzone>
            <div className="modal__titleContainer">
              <label>
                Title:
                <input
                  name="title"
                  // placeholder="What are you selling?"
                  type="text"
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Price:
                <span className="modal__titleContainer__currency">
                  $
                  <input
                    name="price"
                    type="text"
                    maxLength="10"
                    value={this.state.price}
                    onChange={event => this.setState({price: event.target.value.replace(/\D/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}
                  />

                </span>
              </label>
            </div>
            <div>
            <label>
                Description:
                <textarea
                  name="description"
                  className="modal__descriptionInput"
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                Category:
                <select
                  name="category"
                  value={this.state.category}
                  onChange={this.handleInputChange}
                >
                  <option value="" />
                  <option value="orchestral">Orchestral</option>
                  <option value="guitar">Guitar</option>
                  <option value="keyboards">Keyboards</option>
                  <option value="drums">Drums</option>
                  <option value="other">Other</option>
                  <option value="audio">Audio</option>
                  <option value="services">Services</option>
                </select>
              </label>
              {this.state.category === "orchestral" ? (
                <label>
                  Type:
                  <select
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInputChange}
                  >
                    <option value="" />
                    <option value="brass">Brass</option>
                    <option value="strings">Strings</option>
                    <option value="woodwinds">Woodwinds</option>
                    <option value="percussion">Percussion</option>
                  </select>
                </label>
              ) : null}
              {this.state.category === "guitar" ? (
                <label>
                  Type:
                  <select
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInputChange}
                  >
                    <option value="" />
                    <option value="bass_guitars">Bass</option>
                    <option value="acoustic_guitars">Accoustic</option>
                    <option value="electric_guitars">Electric</option>
                  </select>
                </label>
              ) : null}
              {this.state.category === "keyboards" ? (
                <label>
                  Type:
                  <select
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInputChange}
                  >
                    <option value="" />
                    <option value="pianos">Piano</option>
                    <option value="electric_pianos">Electric Piano</option>
                  </select>
                </label>
              ) : null}
              {this.state.category === "drums" ? (
                <label>
                  Type:
                  <select
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInputChange}
                  >
                    <option value="" />
                    <option value="bass_drums">Bass Drums</option>
                    <option value="cymbals">Cymbals</option>
                    <option value="hi_hats">Hi-hats</option>
                    <option value="kits">Kits</option>
                    <option value="snares">Snares</option>
                    <option value="tom_toms">Tom-toms</option>
                  </select>
                </label>
              ) : null}
              {this.state.category === "audio" ? (
                <label>
                  Type:
                  <select
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInputChange}
                  >
                    <option value="" />
                    <option value="cables">Cables</option>
                    <option value="headphones">Headphones</option>
                    <option value="microphones">Microphones</option>
                    <option value="midis">MIDIs</option>
                    <option value="turntables">Turntables</option>
                  </select>
                </label>
              ) : null}
              {this.state.category === "services" ? (
                <label>
                  Type:
                  <select
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInputChange}
                  >
                    <option value="" />
                    <option value="lessons">Lessons</option>
                    <option value="performers">Performers</option>
                    <option value="tuning">Tuning</option>
                  </select>
                </label>
              ) : null}
              {this.state.category !== "services" ?
              <label>
                Condition:
                <select
                  name="condition"
                  value={this.state.condition}
                  onChange={this.handleInputChange}
                >
                  <option value=""></option>
                  <option value="new">New(Never used)</option>
                  <option value="open box">Open-box(Never used)</option>
                  <option value="used">Used</option>
                  <option value="recertified">Recertified</option>
                  <option value="for parts">For parts</option>
                </select>
              </label>
              :
              null
              }
              <label>
                Zipcode:
                <input name="zipcode" value={this.state.zipcode} maxLength="5" type="text" onChange={event => this.setState({zipcode: event.target.value.replace(/\D/,'')})}/>
                {/* or
                <button onClick={this.getCoords}>Find My Location</button> */}
              </label>
            </div>
            <div id="uploadButton">
              <button onClick={this.uploadItem}>Upload</button>
            </div>
            <div className="Modal__mappedImagesInModal">
                <MappedImages className="Modal__mappedImagesInModal" image={this.state.cloudinaryUrl}/>
            </div>
          </div>
        ) : (
          <div className="modal__noUser">
            <button onClick={() => this.login()}>
                Please Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = reducerState => {
  return {
    user: reducerState.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getUser }
  )(Modal)
);
