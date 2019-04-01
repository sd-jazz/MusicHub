import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from "../../redux/reducer"
import Card from '../Card/Card';
import {Link} from 'react-router-dom'
import './user.css'
import axios from 'axios';

class User extends Component {
    constructor (props){

    super(props)
        this.state = {
            listings: [],
            listing_id: this.props.listing_id
        }
    }

    componentDidMount = () => {
        console.log('========',this.props)
        const {user_id} = this.props.user;
        axios.get(`/api/get_user_listings/${user_id}`).then(response =>{
            console.log("response",response.data)
            this.setState({
                listings: response.data
            })
        })
    }

    //get all from listing_id where user_id =
    render(){
        const {listings} = this.state
        const {user} = this.props
        const mappedListings = listings.map(listing => {
            return <Link key={listing.listing_id}  to={`/productview/${listing.listing_id}`}className='home__card'><Card listing={listing} /></Link>
        })
        return (
            <div className="user">
                <button className="user__report">Report</button>
                <div className="user__person">
                    <div className="user__left">
                        <div className="user__userInfo">
                            <img className="user__image" alt="user" src={user.picture}/>
                            <div className="user__noImage">
                                <div className="user__name">{user.profile_name}</div>
                                <div className="user__rating">stars</div>
                            </div>
                        </div>
                        <div className="user__location">location</div>
                    </div>
                    <div className="user__right">
                        <div className="user__cardContainer">{mappedListings}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user

    }
}

export default connect(mapStateToProps,{getUser})(User);