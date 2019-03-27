import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'; 
import { update_listing_id } from '../../redux/reducer'

class ProductView extends Component {
    constructor(props){
        super(props)
        this.state = {
            listing_id: this.props.listing_id
        }
    }

    // Need SQL file to get listing by ID# 
    // Deconstruct everything we need from the listing and place them in the appropriate divs 
     
    componentDidMount = () => {
        this.fetchListingID()
    }

    fetchListingID = () => {
        axios.get(`/api/listings/${this.props.listing.id}`).then(response => {
            console.log("fetchListingID", response)
            this.props.listing_id(response.data)
            this.setState({
                listing_id: response.data
            })
            console.log("listing_id", response.data)
        }) 
    }

    render(){
        return(

            <div className="productView">

                <div className="productView__images">
                    IMAGES
                </div>

                <div className="productView__descriptionAndUserInfo">

                    <div className="productView__description">
                        DESCRIPTION 
                    </div>

                    <div className="productView__userInfo">
                        USER INFO 
                    </div>
                
                </div>

                <div className="productView__googleMaps">
                    GOOGLE MAPS
                </div>

                <div className="productView__similarOfferings">
                    SIMILAR OFFERINGS

                    <div className='productView__similarDisplay'>
                        SIMILAR PRODUCTS
                    </div>

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