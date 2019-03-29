import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from "../../redux/reducer"
import './user.css'

class User extends Component {
    constructor (props){

    super(props)
        this.state = {
            EMPTY: []
        }
    }
    render(){
        return (
            <div className="user">
                <div className="user__left">
                    <div className="user__userInfo">
                        <div className="user__image">picture</div>
                        <div className="user__name">{this.props.user.profile_name}</div>
                        <div className="user__rating">stars</div>
                    </div>
                    <div className="user__location">location</div>
                </div>
                <div className="user__right">
                    <div className="user__items">
                        <div className="user__itemImage">Image</div>
                        <div className="user__itemInfo">
                            <div className="user__itemName">Name</div>
                            <div className="user__itemPrice">Price</div>
                            <div className="user__itemLocation">Location</div>
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