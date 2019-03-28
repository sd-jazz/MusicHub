import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'; 
import './productView.css'
import { update_listing_id } from '../../redux/reducer'

class ProductView extends Component {
    constructor(props){
        super(props)
        this.state = {
            listing_id: [{
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
                user_id: ""
             }]
        }
    }

    // Need SQL file to get listing by ID# 
    // Deconstruct everything we need from the listing and place them in the appropriate divs 
     
    componentDidMount(){
        console.log("PROPS", this.props)
        this.fetchListingID()
    }

    fetchListingID = () => {
        axios.get(`/api/listings/${this.props.match.params.listing_id}`).then(response => {
            this.setState({
                listing_id: response.data
            })
        }) 
    }

    render(){
        console.log(this.state.listing_id[0])
        
        return(

            <div className="productView">

                <div className="productView__images">
                    {/* {this.state} */}
                    <img
            src="https://i.ytimg.com/vi/R1b5FlhMc8s/maxresdefault.jpg"
            className="card__image"
            alt="kitten looking menacing."
          />

                </div>

                <div className="productView__descriptionAndUserInfo">

                    <div className="productView__productInfo">

                        <div className="productView__nameAndPrice">

                            <div className="productView__listingName">
                                NAME {this.state.listing_id[0].listing_name}
                            </div>

                            <div className="productView__listingPrice">
                                PRICE ${this.state.listing_id[0].price}
                            </div>

                        </div>

                        <div className="productView__location">
                            LOCATION
                            {this.state.listing_id[0].location}
                        </div>
                        
                        <div className="productView__productBreakLine">
                            <hr/>
                        </div>

                        <div className="productView__description">

                            <div className="productView__textDescription">
                                DESCRIPTION
                            </div>

                            <div>
                                {this.state.listing_id[0].description}
                            </div>

                        </div>
                        
                    </div>

                    <div className="productView__userInfo">

                        <div className="productView__profilePicture">
                            PROFILE PICTURE
                        </div>

                        <div className="productView__profileName">
                            PROFILE NAME {this.state.listing_id[0].profile_name}
                        </div>

                        <div className="productView__userRating">
                            USER RATING
                        </div>

                        <div className="productView__userBreakLine">
                            <hr/>
                        </div> 

                        <button className="productView__messageButton">
                            Message
                        </button>

                        <button className="productView__saveButton">
                            Save
                        </button>

                    </div>
                
                </div>

                <div className="productView__googleMaps">

                    GOOGLE MAPS

                </div>

                <div className="productView__similarOfferings">

                    SIMILAR OFFERINGS

                </div>
                
            </div> 
        )
    }
}

const mapStateToProps = (reducerState) => {
    return {
        listing_id: reducerState.listing_id
    }
}

export default connect (mapStateToProps, { update_listing_id })(ProductView);