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
   componentDidMount = () => {
       axios.get('/api/get_listings', this.state.searchFilter).then(res => {
           this.setState({filteredListings: res.data})
       })
   }
   searchBarGlobal = (value) => {
       this.setState({
           searchFilter: value
       })
   }
   render(){
       console.log(this.state.searchFilter)
       return(

       <div className="navBar">

           <div className="navBar__title">
               <Link to="/">
                   <h1>MusicHub</h1>
               </Link>
           </div>
           <div className="navBar__navInput">
           <input
               placeholder="Search..."
               onChange={e => this.searchBarGlobal(e.target.value)}
           />
           <button className="navBar__searchButton" onClick={(this.searchBarGlobal)}>
               Search
           </button>
           </div>
           <div className="navBar__smallNavs">
           <Modal trigger={<button>Sell</button>}>
                        <Header>Upload an item
                        </Header>
                    <Modal.Content>
                        <SellModal/>
                    </Modal.Content>
                </Modal>
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
}

export default NavBar;