import React, {Component} from 'react';
import {Modal, Header} from "semantic-ui-react";
import { Link } from 'react-router-dom'
// import { connect } from react-redux
import './navbar.css'
import axios from 'axios';
// import { throws } from 'assert';
import SellModal from "../Modal/Modal";
class NavBar extends Component {
    constructor(){
        super()

        this.state = {
            searchFilter: '',
            filteredListings: []
        }
    }

    updateSearch = (text) => {
        this.setState({
            searchFilter: text
        })
        console.log(this.state.searchFilter)
    }

    searchBarGlobal = () => {
        const {searchFilter} = this.state
        console.log("GLOBAL SEARCH FIRST", this.state.searchFilter)
        axios.get(`/api/listing/${searchFilter}`).then(res => {
            console.log("GLOBAL SEARCH", res)
            this.setState({filteredListings: res.data})
        })
    }
    render(){
        return(

        <div className="navBar">
        
            <div className="navBar__title">
                <Link to="/">
                    <h1>MusicHub</h1>
                </Link>
            </div>
            <div className="navBar__navInput">
            <input onChange={(e) => this.updateSearch(e.target.value)} placeholder="Search MusicHub" />
            <button className="navBar__searchButton" onClick={() => this.searchBarGlobal()}>
                Search
            </button>
            </div>
            <div className="navBar__smallNavs">
                <Link to="/sell">
                    <h2>Sell</h2>
                </Link>
                <Link to="/messages">
                    <h2>Messages</h2>
                </Link>
                <Link to="/user">
                    <h2>User</h2>
                </Link>
            </div>
    </div>
    )
    }
}

export default NavBar;