import React, { Component } from 'react';
import {Modal,Header} from "semantic-ui-react";
import { connect } from 'react-redux';
import {getUser} from "../../redux/reducer"
// import { Glyphicon } from 'react-bootstrap';
// import Star from '../Ratings/Ratings';
import Card from '../Card/Card';
import SellModal from "../Modal/Modal";
import {Link} from 'react-router-dom'
import './user.css'
import axios from 'axios';

class User extends Component {
    constructor (props){

    super(props)
        this.state = {
            listings: [],
            listing_id: this.props.listing_id,
            edit: false,
            modalOpen: false,
            selectedListing: null,
        }
    }

    componentDidMount = () => {
        const {user_id} = this.props.user;
        axios.get(`/api/get_user_listings/${user_id}`).then(response =>{
            this.setState({
                listings: response.data
            })
            console.log("res data ", response.data)
            console.log("listings ", this.state.listings)
        })
        axios.get(`/api/user_data`).then(res => {
            console.log('===',res.data)
            this.props.getUser(res.data);
          });
    }

    getListings = () => {
        const {user_id} = this.props.user;
        axios.get(`/api/get_user_listings/${user_id}`).then(response =>{
            this.setState({
                listings: response.data
            })
        })
    }

    componentDidUpdate = () => {
        // const {user_id} = this.props.user;
        // axios.get(`/api/get_user_listings/${user_id}`).then(response =>{
        //         this.setState({
        //             listings: response.data
        //         })
                
        // })
    }

    handleOpen = (listing) => this.setState({ modalOpen: true, edit: true, selectedListing: listing });
    handleClose = () => this.setState({ modalOpen: false, edit: false });

    deletePost = (listing) => {
        const {user_id} = this.props.user
        console.log('listing', listing.listing_id)
        console.log("listing", listing.room_id)
        if(listing.room_id){
            axios.delete(`/api/delete_listing/${listing.listing_id}/${user_id}/${listing.room_id}/${listing.room_name}`).then(res => {
                console.log('delete', res.data)
                this.setState({
                    listings: res.data
                })
            })
        } else{
            axios.delete(`/api/delete_listing/${listing.listing_id}/${user_id}`).then(res => {
                console.log('delete', res.data)
                this.setState({
                    listings: res.data
                })
            })
        }
    }

    //get all from listing_id where user_id =
    render(){
        console.log(this.state)
        const {listings} = this.state
        const {user} = this.props
        const mappedListings = listings.map(listing => {
            return (
                <div className="user___card">
                    <Link key={listing.listing_id}  to={`/productview/${listing.listing_id}`}className='home__card'><Card listing={listing} /></Link>
                    <button className="editBtn" onClick={()=>this.handleOpen(listing)}>Edit</button>
                    <button className="deleteBtn" onClick={() => this.deletePost(listing)}>Delete</button>
                </div>    
                )
        })
        return (
            <div className="user">
                {/* <button className="user__report">Report</button> */}
                <div className="user__person">
                    <div className="user__left">
                        <div className="user__userInfo">
                            <img className="user__image" alt="user" src={user.picture}/>
                            <div className="user__noImage">
                                <div className="user__name">{user.profile_name.split(' ')[0].split('@')[0]}</div>
                                {/* <div className="user__rating">stars</div> */}
                                {/* <Star star="1"/>  */}
                            </div>
                        </div>
                        {/* <div className="user__location">location</div> */}
                    </div>
                    <div className="user__right">
                    <Modal
                        open={this.state.modalOpen}
                        onClose={this.handleClose}
                        
                    
                        >
                        <Header>Edit Listing</Header>
                        <Modal.Content>
                            <SellModal 
                            close={this.handleClose} 
                            edit={this.state.edit} 
                            listing={this.state.selectedListing}
                            getListings={this.getListings}
                            />
                        </Modal.Content>
                    </Modal>
                        <div className="user__cardContainer">{mappedListings}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        user: state.user

    }
}

export default connect(mapStateToProps,{getUser})(User);