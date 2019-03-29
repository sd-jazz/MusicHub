import React, { Component } from 'react';
import { get_searched_listings } from '../../redux/reducer'
// import axios from 'axios';
import Card from '../Card/Card';
import { connect } from 'react-redux'; 

class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state = {
            searched_listing: this.props.searched_listings
        }
    }

    componentDidMount(){
        console.log("PROPS", this.props)
    }

    render(){

        // const { searched_listing } = this.state

        let searchResults = this.props.searched_listing.map(listing => {

            return (
                <div className="searchResults__mappedResults" key={listing.listing_name}>
                    <img src={ listing.images } alt={ listing.listing_name }/> 
                    {/* <div key={listing.listing_id} className='home__card'><Card listing={listing} /></div> */}
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

// const mapStateToProps = (reducerState) => {
//     return {
//         searched_listings: reducerState.search_listings
//     }
// }

// export default connect (mapStateToProps, { get_searched_listings })(SearchResults);
export default SearchResults; 