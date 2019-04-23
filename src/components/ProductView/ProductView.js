import React, { Component } from "react";
import axios from "axios";
import SimilarListings from './SimilarListings';
import Card from "../Card/Card";
import { connect } from "react-redux";
import io from "socket.io-client";
import "./productView.css";
import { update_listing_id } from "../../redux/reducer";
// import CarouselContainer from "./CarouselContainer";
import SlickContainer from './SlickContainer'
import { Link } from "react-router-dom";
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
      ],
      similar_listings: []

    };
    this.socket = io("localhost:4010");
  }

  // Need SQL file to get listing by ID#
  // Deconstruct everything we need from the listing and place them in the appropriate divs

  componentDidMount() {
    this.fetchListingID()
  }

  fetchListingID = () => {
    axios
      .get(`/api/listings/${this.props.match.params.listing_id}`)
      .then(response => {
        this.setState({
          listing_id: response.data
        });
      }).then(() =>{
        this.getSimilarListings()
      });
  };

  getSimilarListings = () => {
    console.log("getSimilarListings START", this.state.listing_id[0].type)
    axios.get(`/api/get_similar_listings/${this.state.listing_id[0].type}`).then(response =>{
        console.log("RESPONSE CALLBACK", response)
        this.setState({
            similar_listings: response.data
        })
    })
}


  connectUsers = () => {
    this.socket.emit("CONNECT_USERS", {
      user1_id: this.props.user.user_id,
      user1_profileName: this.props.user.profile_name,
      user2_id: this.state.listing_id[0].user_id,
      user2_profileName: this.state.listing_id[0].profile_name,
      listing_name: this.state.listing_id[0].listing_name,
      listing_id: this.props.match.params.listing_id
    });
  };

  render() {
    console.log(this.props.user)
    const { type } = this.state.listing_id[0].type
    console.log("STATE", this.state.listing_id, "IMAGES", this.state.listing_id[0].images, "SIMILAR PRODUCTS", this.state.listing_id[0].type, "TYPE", type)
    return (
      <div className="productView">
                    {/* <div className="productView__listingName">
                <h2 className="ui header">
                  {this.state.listing_id[0].listing_name}
                </h2>
              </div> */}

        <div className="productView__images">
          {/* <CarouselContainer images={[this.state.listing_id[0].images]} id={[this.state.listing_id[0].listing_id]} /> */}
          <SlickContainer images={this.state.listing_id[0].images} id={this.state.listing_id[0].listing_name}/> 
        </div>

        <div className="productView__descriptionAndUserInfo">
          <div className="productView__productInfo">
            <div className="productView__nameAndPrice">
              <div className="productView__listingName">
                <h2 className="ui header">
                  {this.state.listing_id[0].listing_name}
                </h2>
              </div>

              <div className="productView__listingPrice">
                <h2 className='ui header'>${this.state.listing_id[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
              </div>
            </div>

            <div className="productView__location">
              <div className="productView__zipcode">
                <h2>{/*this.state.listing_id[0].zipcode*/}Phoenix, AZ</h2>
              </div>
            </div>
            
            <hr className="productView__lineBreakListingInfo" />
            <div className="productView__description">
                <h3 className="ProductView__description_description">Description</h3>
              <div className='productView__descriptionText'>{this.state.listing_id[0].description}</div>
            </div>
          </div>

          <div className="productView__userInfo">
            <img
              className="productView__profilePicture"
              style={{
                height: "80px",
                width: "80px",
                marginBottom: "5px",
                alignSelf: "center"
              }}
              src={this.state.listing_id[0].picture}
            />

            <div className="productView__profileName">
              <h3 className="ui header">
                {this.state.listing_id[0].profile_name.split(' ')[0].split('@')[0]}
              </h3>
            </div>

            {/* <div className="productView__userRating">USER RATING</div> */}

            <hr className="productView__lineBreakUserInfo" />

            <Link onClick={this.connectUsers} to={`/messages`}>
              <button className="productView__messageButton">Message</button>
            </Link>

            {/* <button className="productView__saveButton">Save</button> */}
          </div>
        </div>
        
        <div className="productView__googleMaps">
          <Map zipcode={this.state.listing_id[0].zipcode}/>
        </div>

        <div className="productView__similarListings">
          {/* <SimilarListings similar={this.state.similar_listings}/> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducerState => {
  return {
    listing_id: reducerState.listing_id,
    user: reducerState.user
  };
};

export default connect(
  mapStateToProps,
  { update_listing_id }
)(ProductView);
