import React, { Component } from 'react';
import './Home.css'
import FilterSearch from '../FilterSearch/FilterSearch';
import SortDropdown from '../SortDropdown/SortDropdown';
import HOCdatafetcher from '../HocDataFetcher/HocDataFetcher'
import Card from '../Card/Card';
import {Link} from 'react-router-dom'


class Home extends Component {
    constructor (props){

    super(props)
        this.state = {
            filterText: '',
            listings: []
        }
    }
    

    filterTextHandler = (val) => {
        this.setState({
            filterText: val
        })
    }


    render(){
        const { listings } = this.state
        // const filteredListings = listings.filter(listing => {
        //     return listing.listing_name.toLowerCase().includes(this.state.filterText)
        // })

        const filteredListings = this.props.data.filter(listing => {
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

export default HOCdatafetcher(Home, `/api/get_listings`)