import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from "../../redux/reducer"
import './user.css'
import axios from 'axios';

class User extends Component {
    constructor (props){

    super(props)
        this.state = {
            EMPTY: []
        }
    }

    getMyListings = () => {
        axios.get('api/listing_id', () => {

        })
    }

    //get all from listing_id where user_id =
    render(){
        const {user} = this.props
        return (
            <div className="user">
                <button className="user__report">Report</button>
                <div className="user__person">
                    <div className="user__left">
                        <div className="user__userInfo">
                            <img className="user__image" src={user.picture}/>
                            <div>
                                <div className="user__name">{user.profile_name}</div>
                                <div className="user__rating">stars</div>
                            </div>
                        </div>
                        <div className="user__location">location</div>
                    </div>
                    <div className="user__right">
                        <div className="user__items">
                            <div className="user__item">
                                <div className="user__itemImage">Image</div>
                                <div className="user__itemInfo">
                                    {/* <div className="user__itemName">{this.props.listing.listing_name}</div> */}
                                    {/* <div className="user__itemPrice">{this.props.listing.price}</div> */}
                                    <div className="user__itemLocation">Location</div>
                                </div>
                            </div>
                        </div>
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