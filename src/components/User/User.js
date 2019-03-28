import React, { Component } from 'react';

class User extends Component {
    constructor (props){

    super(props)
        this.state = {
            EMPTY: []
        }
    }
    render(){
        return (
            <div className="user"></div>
        )
    }
}

export default User;