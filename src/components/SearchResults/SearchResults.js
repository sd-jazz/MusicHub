import React, { Component } from 'react';
import { get_searched_listing } from '../../redux/reducer'
// import axios from 'axios';
import { connect } from 'react-redux'; 

class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state = {
            searched_listing: this.props.searched_listing
        }
    }

    render(){

        return(

            <div className='searchResults'>

                    <div className='searchedResults__cardContainer'>
                        {/* {searchResults} */}
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

export default connect (mapStateToProps, { get_searched_listing })(SearchResults);
