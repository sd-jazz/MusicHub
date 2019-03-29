import React, { Component } from "react";
import { Button } from "semantic-ui-react";
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
      type1: "",
      type2: "",
      
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

  uploadItem=()=>{
      const post = {
        user_id: 2,
        listing_name: this.state.title,
        description: this.state.description,
        time_stamp: new Date,
        type: this.state.type2,
        price: this.state.price
        
    }
      if(this.state.title&&this.state.price&&this.state.description&&this.state.type2){
         console.log(this.state) 
         axios.post(`/api/listings`, post).then(res=>{

         })
      }else{
          alert("incomplete form")
      }
  }

  render() {
    return (
      <div>
          {
            this.props.user ? 
           <div>
            <Button>Upload a photo</Button>
            <label>
              Title:
              <input name="title" type="text" onChange={this.handleInputChange} />
            </label>
            <label>
              Description:
              <input name="description" type="text" onChange={this.handleInputChange} />
            </label>
            <label>
              Price:
              <input name="price" type="number" onChange={this.handleInputChange} />
            </label>
            <label>
              Type:
              <select
                name="category"
                value={this.state.category}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="orchestral">Orchestral</option>
                <option value="guitar">Guitar</option>
                <option value="keyboards">Keyboards</option>
                <option value="drums">Drums</option>
                <option value="other">Other</option>
                <option value="audio">Audio</option>
                <option value="services">Services</option>
              </select>
            </label>
            {
                this.state.category === "orchestral" ?
                <label>
              Type:
              <select
                name="type1"
                value={this.state.type1}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="brass">Brass</option>
                <option value="strings">Strings</option>
                <option value="woodwinds">Woodwinds</option>
                <option value="percussion">Percussion</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "orchestral" && this.state.type1 === "brass" ?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="french_horns">French Horns</option>
                <option value="trombones">Trombone</option>
                <option value="trumpets">Trumpets</option>
                <option value="tubas">Tubas</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "orchestral" && this.state.type1 === "strings"?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="basses">Basses</option>
                <option value="cellos">Cellos</option>
                <option value="violas">Violas</option>
                <option value="violins">Violins</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "orchestral" && this.state.type1 === "woodwinds"?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="bass_clarinets">Bass Clarinets</option>
                <option value="bassoons">Bassoons</option>
                <option value="clarinets">Clarinets</option>
                <option value="flutes">Flutes</option>
                <option value="saxophones">Saxophones</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "orchestral" && this.state.type2 === "percussion"?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="bass_drums">Bass Drums</option>
                <option value="bongos">Bongos</option>
                <option value="marimbas">Marimbas</option>
                <option value="snares">Snares</option>
                <option value="timpani">Timpanis</option>
                <option value="xylophones">Xylophones</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "guitar" ?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="bass_guitars">Bass</option>
                <option value="acoustic_guitars">Accoustic</option>
                <option value="electric_guitars">Electric</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "keyboards" ?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="pianos">Piano</option>
                <option value="electric_pianos">Electric Piano</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "drums" ?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="bass_drums">Bass Drums</option>
                <option value="cymbals">Cymbals</option>
                <option value="hi_hats">Hi-hats</option>
                <option value="kits">Kits</option>
                <option value="snares">Snares</option>
                <option value="tom_toms">Tom-toms</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "other" ?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="harmonicas">Harmonicas</option>
                <option value="tambourines">Tambourines</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "audio" ?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="cables">Cables</option>
                <option value="headphones">Headphones</option>
                <option value="microphones">Microphones</option>
                <option value="midis">MIDIs</option>
                <option value="turntables">Turntables</option>
              </select>
            </label>
            : 
            null
            }
            {
                this.state.category === "services" ?
                <label>
              Type:
              <select
                name="type2"
                value={this.state.type2}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                <option value="performers">Performers</option>
                <option value="dj">DJ</option>
                <option value="tuning">Tuning</option>
                <option value="lessons">Lessons</option>
              </select>
            </label>
            : 
            null
            }
            
            <label>
              Condition:
              <select name="condition" value={this.state.condition} onChange={this.handleInputChange}>
                <option value="new">New(Never used)</option>
                <option value="open box">Open-box(Never used)</option>
                <option value="used">Used</option>
                <option value="recertified">Recertified</option>
                <option value="for parts">For parts</option>
              </select>
            </label>
            <button onClick={this.uploadItem}>Upload</button>
            </div>
            :
            <div>
                Please Login
            </div>
        }
        </div>
    );
  }
}

export default Modal;
