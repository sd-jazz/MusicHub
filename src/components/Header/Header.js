import React, { Component } from 'react';
import './header.css';
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
import SecondNav2 from '../secondNav/SecondNav2'
import NavBar2 from '../NavBar/NavBar2';


class Header extends Component {
    render (){
        return (
            <div>
                <div className="headerMain">
                    <NavBar2 />
                </div>
                <div className="headerMain2">
                    <SecondNav2 />
                </div>
                
            </div>
        )
    }
}

export default Header