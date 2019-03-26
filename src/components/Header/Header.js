import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar'
import SecondNav from '../secondNav/SecondNav'

class Header extends Component {
    render (){
        return (
            <div>
                <div className="header">
                    <NavBar />
                </div>
                <div>
                    <SecondNav />
                </div>
            </div>
        )
    }
}

export default Header