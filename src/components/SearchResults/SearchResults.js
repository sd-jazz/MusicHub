import React, { Component } from 'react';
import SortDropdown from '../SortDropdown/SortDropdown';
import './SearchResults.css';
import { get_searched_listings } from '../../redux/reducer'
// import axios from 'axios';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import axios from 'axios'; 

class SearchResults extends Component {
    constructor(props){
        super(props)
        this.state = {
            searched_listings: this.props.searched_listings,
            listings: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/get_listings').then(response =>{
            this.setState({
                listings: response.data
            })
        })
    }

    filterTextHandler = (val) => {
        this.setState({
            filterText: val
        })
    }

    sortByPriceDesc = () => {
        console.log("PRICE DESC")
          let priceDesc = this.state.listings.sort((a, b) => (b.price - a.price))
            this.setState({
                listings: priceDesc
            })
      }

      sortByPriceAsc = () => {
          console.log("PRICE ASC")
          let priceAsc = this.state.listings.sort((a, b) => (a.price - b.price))
            this.setState({
                listings: priceAsc
            })
      }

      sortByDateAsc = () => {
        console.log("DATE ASC")
        let dateAsc = this.state.listings.sort((a, b) => (a.listing_id - b.listing_id))
          this.setState({
              listings: dateAsc
          })
    }

    sortByDateDesc = () => {
        console.log("DATE DESC")
        let dateDesc = this.state.listings.sort((a, b) => (b.listing_id - a.listing_id))
          this.setState({
              listings: dateDesc
          })
    }

      fireSortFunctions = (e) => {
        console.log(e.target.value)
        if(e.target.value === "PLH"){
            this.sortByPriceAsc()
        }
        else if(e.target.value === "PHL"){
            this.sortByPriceDesc()
        }
       else if(e.target.value === "DLH"){
            this.sortByDateAsc()
        }
       else if(e.target.value ==="DHL"){
            this.sortByDateDesc()
        }
      }

    render(){
        const { searched_listings, listings } = this.state
        console.log(listings)

        let searchResults = this.props.searched_listings.map(listing => {
            console.log("LISTING", listing)
            return (
                <div className="searchResults__results">
                <Link key={listing.listing_id} to={`/productview/${listing.listing_id}`}  className='home__card'><Card listing={listing}/>                
                </Link>
                </div>
            )
        })

        let mappedListings = listings.map(listing => {
            return <Link key={listing.listing_id}  to={`/productview/${listing.listing_id}`}className='home__card'><Card listing={listing} /></Link>
        })
        return(
        <div className="searchResults__all">
        <div className="searchResults__Master">
            {searched_listings.length == 0 ? (
                <div className="searchResults__none">
                    <div className="searchResults__noResultsFound">
                        <h1>Sorry, there are no results for your search.  Please try again.</h1>
                    </div>
                    <div className='searchResults__filterNone'>
                        <input placeHolder="Filter by name" onChange={(e) => this.filterTextHandler(e.target.value)}></input>
                        <SortDropdown fireSortFunctions={this.fireSortFunctions} />
                    </div>
                    <div className="searchResults__mappedListingsNone">
                        {mappedListings}
                    </div>
                </div>
        ) : (
            <div className='searchResults'>
                  
                    <div className='searchResults__filter'>
                        <input placeHolder="Filter by name" onChange={(e) => this.filterTextHandler(e.target.value)}></input>
                        <SortDropdown fireSortFunctions={this.fireSortFunctions} />
                    </div>
                    <div className='searchResults__resultsContainer'>
                        {searchResults}
                    </div>

        </div>
        )}
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
