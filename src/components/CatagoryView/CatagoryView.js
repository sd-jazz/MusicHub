import React, { Component } from 'react';
import SortDropdown from '../SortDropdown/SortDropdown';
import Card from '../Card/Card';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'; 
import { get_listing_type } from '../../redux/reducer'
import axios from 'axios';

class CatagoryView extends Component {
    constructor (props){

    super(props)
        this.state = {
            filterText: '',
            listings: [],
            listing_id: this.props.listing_id,
            // listing_type: this.props.match.params.listing_type
        }
    }
    
    componentDidMount = () => {
        this.getCategory()
    }

    getCategory = () => {
        axios.get(`/api/get_listings_by_type/${this.props.match.params.listing_type}`).then(response =>{
            console.log(this.props.match.params.listing_type)
            this.setState({
                listings: response.data
            })
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log( this.props.match.params.listing_type, prevProps.listing_type)
        if (this.props.match.params.listing_type !== prevProps.match.params.listing_type) {
          this.getCategory(this.state.listing_type);
        }
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
          console.log("DATE ASC 2", dateAsc)
            this.setState({
                listings: dateAsc
            })
      }

      sortByDateDesc = () => {
          console.log("DATE DESC")
          let dateDesc = this.state.listings.sort((a, b) => (b.listing_id - a.listing_id))
          console.log("DATE DESC 2", dateDesc)
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
        console.log("STATE", this.state)
        const { listings } = this.state
        console.log("LISTINGS", listings)

        const filteredListings = listings.filter(listing => {
            return listing.listing_name.toLowerCase().includes(this.state.filterText)
        })


        let mappedListings = filteredListings.map(listing => {
            return <Link key={listing.listing_id} to={`/productview/${listing.listing_id}`}  className='home__card'><Card listing={listing}/></Link>
        })
        return (
            <div className='home'>
                <div className='home__filter'>
                    <input onChange={(e) => this.filterTextHandler(e.target.value)}></input>
                    <SortDropdown fireSortFunctions={this.fireSortFunctions} /* listings={this.props.data} */ />
                </div>
                    <div className='home__cardContainer'>
                        {mappedListings}
                    </div>
            </div>
        )
    }
}

export default CatagoryView
