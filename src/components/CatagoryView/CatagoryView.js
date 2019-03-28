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
            listing_type: this.props.listing_type
        }
    }
    
    componentDidMount = () => {
        axios.get(`/api/get_listings_by_type/${this.props.match.params.listing_type}`).then(response =>{
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


    render(){
        const { listings } = this.state
        console.log(listings)

        
        const filteredListings = listings.filter(listing => {
            return listing.listing_name.toLowerCase().includes(this.state.filterText)
        })


        let mappedListings = filteredListings.map(listing => {
            return <Link key={listing.listing_id}  to='#' className='home__card'><Card listing={listing}/></Link>
        })
        return (
            <div className='home'>
                <div className='home__filter'>
                    <input onChange={(e) => this.filterTextHandler(e.target.value)}></input>
                    <SortDropdown listings={this.props.data}/>
                </div>
                    <div className='home__cardContainer'>
                        {mappedListings}
                    </div>
            </div>
        )
    }
}

export default CatagoryView
