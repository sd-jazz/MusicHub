import React, { Component } from 'react';


class Messages extends Component {
    constructor (props){

    super(props)
        this.state = {
            EMPTY: []
        }
    }
    render(){
        return (
            <div className="messages"></div>
        )
    }
}

export default Messages;