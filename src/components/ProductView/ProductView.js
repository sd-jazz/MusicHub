import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./productView.css";
import { update_listing_id } from "../../redux/reducer";
import CarouselContainer from "./CarouselContainer";
import Map from "../Map/Map";

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_id: [
        {
          description: "",
          email: "",
          listing_id: "",
          listing_name: "",
          price: "",
          profile_name: "",
          sold: false,
          tags: "",
          time_stamp: "",
          type: "",
          user_id: "", 
          images: [],
          zipcode: null,
        }
      ]
    };
  }

  // Need SQL file to get listing by ID#
  // Deconstruct everything we need from the listing and place them in the appropriate divs

  componentDidMount() {
    this.fetchListingID();
  }

  fetchListingID = () => {
    axios
      .get(`/api/listings/${this.props.match.params.listing_id}`)
      .then(response => {
        this.setState({
          listing_id: response.data
        });
      });
  };

  render() {
    console.log("LISTING INFORMATION", this.state.listing_id[0], "IMAGES", this.state.listing_id[0].images, "this.state.picture", this.state.listing_id[0].picture);
    console.log("zipcode state", this.state.listing_id[0].zipcode)
    return (
      <div className="productView">
        <div className="productView__images">
        <CarouselContainer images={[this.state.listing_id[0].images]}/>
          {/* <img
            src="https://i.ytimg.com/vi/R1b5FlhMc8s/maxresdefault.jpg"
            className="card__image"
            alt="kitten looking menacing."
          /> */}
        </div>

        <div className="productView__descriptionAndUserInfo">
          <div className="productView__productInfo">
            <div className="productView__nameAndPrice">
              <div className="productView__listingName">
                <h2 className='ui header'>{this.state.listing_id[0].listing_name}</h2>
              </div>

              <div className="productView__listingPrice">
                <h2 className='ui header'>${this.state.listing_id[0].price}</h2>
              </div>
            </div>

            <div className="productView__location">
              LOCATION
              {this.state.listing_id[0].location}
            </div>
            <hr className='productView__lineBreakListingInfo'/>
            <div className="productView__description">
                <h3 className='ui header'>Description</h3>
              <div className='productView__descriptionText'>{this.state.listing_id[0].description}</div>
            </div>
          </div>

          <div className="productView__userInfo">
            <img className="productView__profilePicture" style={{height: '80px', width: '80px', marginBottom: '5px', alignSelf:'center'}}src={this.state.listing_id[0].picture}/>

            <div className="productView__profileName">
              <h3 className='ui header'>{this.state.listing_id[0].profile_name}</h3>
            </div>

            <div className="productView__userRating">USER RATING</div>

              <hr  className='productView__lineBreakUserInfo'/>


            <button className="productView__messageButton">Message</button>

            <button className="productView__saveButton">Save</button>
          </div>
        </div>
        
        <div className="productView__googleMaps">
          <Map zipcode={this.state.listing_id[0].zipcode}/>
        </div>


        <div className="productView__similarOfferings">SIMILAR OFFERINGS</div>
      </div>
    );
  }
}

const mapStateToProps = reducerState => {
  return {
    listing_id: reducerState.listing_id
  };
};

export default connect(
  mapStateToProps,
  { update_listing_id }
)(ProductView);
