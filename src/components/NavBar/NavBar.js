import React from 'react';
import { Link } from 'react-router-dom'
// import { connect } from react-redux 

const NavBar = () => {

    return (

        <div className="navBar">

            <Link to="/">
                <h2>Home</h2>
            </Link>

            <Link to="/gear">
                <h2>Gear</h2>
            </Link>

            <Link to="/services">
                <h2>Services</h2>
            </Link>

            <Link to="/gig_board">
                <h2>Gig Board</h2>
            </Link>

    </div>

    )
}

export default NavBar; 