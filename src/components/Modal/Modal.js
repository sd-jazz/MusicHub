import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser } from "../../redux/reducer";
import axios from "axios";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      title: "",
      description: "",
      price: 0,
      category: "",
      type: "",

      condition: "new"
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
    const post = {
      user_id: this.props.user.user_id,
      listing_name: this.state.title,
      description: this.state.description,
      time_stamp: new Date(),
      type: this.state.type,
      price: this.state.price,
      condition: this.state.condition
    };

    if (
      this.state.title &&
      this.state.price &&
      this.state.description &&
      this.state.category === "other"
    ) {
      post.type = this.state.category;
      axios.post(`/api/listings`, post).then(res => {
        this.props.close();
      });
    } else if (
      this.state.title &&
      this.state.price &&
      this.state.description &&
      this.state.type
    ) {
      console.log(this.state);
      axios.post(`/api/listings`, post).then(res => {
        this.props.close();
      });
    } else {
      alert("incomplete form");
    }
  };

  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
            <Button>Upload a photo</Button>
            <label>
              Title:
              <input
                name="title"
                type="text"
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Description:
              <input
                name="description"
                type="text"
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Price:
              <input
                name="price"
                type="number"
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Type:
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

            <label>
              Condition:
              <select
                name="condition"
                value={this.state.condition}
                onChange={this.handleInputChange}
              >
                <option value="new">New(Never used)</option>
                <option value="open box">Open-box(Never used)</option>
                <option value="used">Used</option>
                <option value="recertified">Recertified</option>
                <option value="for parts">For parts</option>
              </select>
            </label>
            <button onClick={this.uploadItem}>Upload</button>
          </div>
        ) : (
          <div>Please Login</div>
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

export default connect(
  mapStateToProps,
  { getUser }
)(Modal);
