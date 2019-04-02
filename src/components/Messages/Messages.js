import React, { Component } from "react";
import "./messages.css";
import io from 'socket.io-client'


class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
      messages: []
    };
    
    this.socket = io('localhost:4010')

    this.sendMessage = e => {
        e.preventDefault();
        this.socket.emit('SEND_MESSAGE', {
            author: this.state.username,
            message: this.state.message,
        });
        this.setState({message: ''});
    }

    this.sendPm = e => {
        e.preventDefault();
        this.socket.emit('SEND_PRIVATE', {
            user1_id: this.props.user_id,
            user2_id: this.match.params.user_id,
            message: this.state.message,
        })
    }
    this.socket.on('RECEIVE_MESSAGE', function(data){
        addMessage(data);
    });
    
    const addMessage = data => {
        console.log(data);
        this.setState({messages: [...this.state.messages, data]});
        console.log(this.state.messages);
    };


  }

  messageHandler = (val) => {
    this.setState({message: val})
  }

  render() {
      const mappedMessages = this.state.messages.map(message => {
          return <div>{message.message}</div>
      })
    return (
      <div className="messagesContainer">
        <div className="messagesContainer__messages">
          ChatBox
          <ul id="messages" />
          {mappedMessages}
          <form className='messagesContainer__form'>
            <input value={this.state.message} onChange={e => this.messageHandler(e.target.value)} id="m" autocomplete="off" />
            <button onClick={this.sendMessage}>Send</button>
          </form>
        </div>
        <div className="messagesContainer__listingInfo">
          <div> Picture </div>
          <div> Title</div>
          <div> Price</div>
          <div> Location</div>
          <div> Description</div>
        </div>
      </div>
    );
  }
}

export default Messages;
