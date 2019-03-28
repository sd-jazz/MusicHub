import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './footer.css'

export default class Footer extends Component {
    
    render(){
        
        return (
            <div class="footer">
                <h3>MusicHub 2019</h3>
                <div class="footer__linksRight">
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