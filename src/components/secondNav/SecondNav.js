import React from 'react';
import { Link } from 'react-router-dom'
// import { connect } from react-redux 
import './secondNav.css'

const SecondNav = () => {

    return (
        <div className="secondNav">
            <Link to="/classical">
                <h3>Classical</h3>
            </Link>
            <Link to="/guitars">
                <h3>Guitars</h3>
            </Link>
            <Link to="/keyboards">
                <h3>Keyboards</h3>
            </Link>
            <Link to="/drums">
                <h3>Drums</h3>
            </Link>
            <Link to="/audioEquipment">
                <h3>Audio Equipment</h3>
            </Link>
            <Link to="/services">
                <h3>Services</h3>
            </Link>
    </div>
    )
}

export default SecondNav; 