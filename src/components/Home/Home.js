import React, { Component } from 'react';
import './home.css'
import SortDropdown from '../SortDropdown/SortDropdown';
import Card from '../Card/Card';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'; 
import { update_listing_id } from '../../redux/reducer'
import axios from 'axios';

class Home extends Component {
    constructor (props){

    super(props)
        this.state = {
            filterText: '',
            listings: [],
            listing_id: this.props.listing_id
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
          let dateAsc = this.state.listings.sort((a, b) => (a.time_stamp - b.time_stamp))
            this.setState({
                listings: dateAsc
            })
      }

      sortByDateDesc = () => {
          console.log("DATE DESC")
          let dateDesc = this.state.listings.sort((a, b) => (b.time_stamp - a.time_stamp))
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
        console.log("LISTINGS", this.state.listings)
        const { listing_id } = this.state
        // const filteredListings = listings.filter(listing => {
        //     return listing.listing_name.toLowerCase().includes(this.state.filterText)
        // })

        const filteredListings = this.state.listings.filter(listing => {
            return listing.listing_name.toLowerCase().includes(this.state.filterText)
        })


        let mappedListings = filteredListings.map(listing => {
            return <Link key={listing.listing_id}  to={`/productview/${listing.listing_id}`}className='home__card'><Card listing={listing} /></Link>
        })


        /* 
           onClick={ () => {
           this.props.getPreset(preset.preset_json); this.props.getIsPreset(true); this.props.getPresetId(preset.preset_id);}}
           className='header' to={`/cube/${preset.preset_id}`}>{`${preset.preset_name}` || `Cube ${index}` }</Link>
           */
        return (
            <div className='home'>
                <div className='home__filter'>
                    <input onChange={(e) => this.filterTextHandler(e.target.value)}></input>
                    <SortDropdown fireSortFunctions={this.fireSortFunctions} />
                </div>
                    <div className='home__cardContainer'>
                        {mappedListings}
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

export default connect (mapStateToProps, { update_listing_id })(Home);

