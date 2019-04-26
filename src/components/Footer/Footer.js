import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './footer.css'

export default class Footer extends Component {
    
    render(){
        
        return (
            <div className="footer">
            <Link className="footer__title" to="/" >
                <h3>MusicHub</h3>
            </Link>
                <div className="footer__links">
                    <Link to="/sell">
                        <h2>Sell</h2>
                    </Link>
                    <Link to="/user">
                        <h2>User</h2>
                    </Link>
                </div>
            </div>
        )
    }
}

