import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./productView.css";
import { update_listing_id } from "../../redux/reducer";
import CarouselContainer from "./CarouselContainer";
import Map from "../Map/Map"

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [
        {
          description: "",
          email: "",
          listing: "",
          listing_name: "",
          price: "",
          profile_name: "",
          sold: false,
          tags: "",
          time_stamp: "",
          type: "",
          user_id: "",
          longitude: -111.98,
          latitude: 33.44
        }
      ],
      
    };
  }

  // Need SQL file to get listing by ID#
  // Deconstruct everything we need from the listing and place them in the appropriate divs

  componentDidMount() {
    console.log("PROPS", this.props);
    this.fetchListing();
  }

  fetchListing = () => {
    console.log("fetchListing BEGIN");
    axios
      .get(`/api/listings/${this.props.match.params.listing}`)
      .then(response => {
        this.setState({
          listing: response.data
        });
      });
  };

  render() {
      const {listing_name,price,location,description,profile_name,longitude,latitude} = this.state.listing[0].price
    console.log(this.state.listing[0]);
    return (
      <div className="productView">
        <div className="productView__images">
        <CarouselContainer/>
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
                <h2 className='ui header'>{listing_name}</h2>
              </div>

              <div className="productView__listingPrice">
                <h2 className='ui header'>${price}</h2>
              </div>
            </div>

            <div className="productView__location">
              LOCATION
              {location}
            </div>
            <hr className='productView__lineBreakListingInfo'/>
            <div className="productView__description">
                <h3 className='ui header'>Description</h3>
              <div className='productView__descriptionText'>{description}</div>
            </div>
          </div>

          <div className="productView__userInfo">
            <img className="productView__profilePicture" style={{height: '80px', width: '80px', marginBottom: '5px', alignSelf:'center'}}src='https://memegenerator.net/img/images/400x/15202579.jpg'/>

            <div className="productView__profileName">
              <h3 className='ui header'>{profile_name}</h3>
            </div>

            <div className="productView__userRating">USER RATING</div>

              <hr  className='productView__lineBreakUserInfo'/>


            <button className="productView__messageButton">Message</button>

            <button className="productView__saveButton">Save</button>
          </div>
        </div>

        <Map lng={longitude} lat={latitude}/>

        <div className="productView__similarOfferings">SIMILAR OFFERINGS</div>
      </div>
    );
  }
}

const mapStateToProps = reducerState => {
  return {
    listing: reducerState.listing_id
  };
};

export default connect(
  mapStateToProps,
  { update_listing_id }
)(ProductView);
