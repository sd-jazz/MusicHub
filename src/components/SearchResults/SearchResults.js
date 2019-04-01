import React, { Component } from 'react';
import './SearchResults.css';
import { get_searched_listings } from '../../redux/reducer'
// import axios from 'axios';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state = {
            searched_listings: this.props.searched_listings
        }
    }

    componentDidMount(){
        console.log("PROPS", this.props)
    }

    render(){
        // const { searched_listing } = this.state
        console.log(this.props)
        let searchResults = this.props.searched_listings.map(listing => {
            console.log("LISTING", listing)
            return (
                <div className="searchResults__results">
                <Link key={listing.listing_id} to={`/productview/${listing.listing_id}`}  className='home__card'><Card listing={listing}/>                
                </Link>
                </div>
            )
        })

        return(

            <div className='searchResults'>

                    <div className='searchedResults__cardContainer'>
                        {searchResults}
                    </div>

            </div>
            
        )
    }
}

const mapStateToProps = (reducerState) => {
    console.log("REDUCER STATE", reducerState)
    return {
        searched_listings: reducerState.searched_listings
    }
}

export default connect (mapStateToProps, { get_searched_listings })(SearchResults);
