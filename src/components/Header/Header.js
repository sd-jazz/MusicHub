import React, { Component } from 'react';
import './header.css';
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar'
import SecondNav from '../secondNav/SecondNav'
import SecondNav2 from '../secondNav/SecondNav2'
import NavBar2 from '../NavBar/NavBar2';

class Header extends Component {
    render (){
        return (
            <div>
                <div className="header">
                    <NavBar2 />
                </div>
                <div>
                    <SecondNav2 />
                </div>
            </div>
        )
    }
}

export default Header