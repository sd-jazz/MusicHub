import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import { connect } from react-redux 
import './navbar.css'

class NavBar extends Component {
    render(){
    return(

        <div className="navBar">
        
            <div className="navBar__title">
                <Link to="/">
                    <h1>MusicHub</h1>
                </Link>
            </div>
            <div className="navBar__navInput">
                <input />
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