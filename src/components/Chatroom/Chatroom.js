import React, { Component } from "react";
import io from "socket.io-client";
import axios from "axios";
import { getUser, get_room_name } from "../../redux/reducer";
import { connect } from "react-redux";

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
      listing: [],
      recipient: '',
      room_data: [],
      old_messages: []
    };

    this.socket = io("localhost:4010");

    this.socket.on("PM_MESSAGE", data => {
      this.addMessage(data);
    });
  }

  componentDidMount = () => {
    axios.get(`/api/get_chatroom_by_room_name/${this.props.room_name}`).then(res => {
        console.log(res.data)
        this.setState({room_data: res.data})
    })
    axios.get(`/api/get_room_data/${this.props.room_name}`).then(res => {
        console.log(res.data)
        this.setState({old_messages: res.data})
    })
  }
  

  addMessage = data => {
    this.setState({ messages: [...this.state.messages, data], message: "" });
  };

  sendPm = e => {
    e.preventDefault();
    
    this.socket.emit("PM_MESSAGE", {
      room_name: this.props.room_name,  
      message: this.state.message,
      sender: this.state.room_data[0].user1_name,
      recipient: this.state.room_data[0].user2_name
    });
    this.setState({ message: "" });
  };

  messageHandler = val => {
    this.setState({ message: val });
  };

  render() {
    console.log(this.state.room_data)  
    let { listing } = this.state;
    const mappedMessages = this.state.messages.map(message => {
      return <div>{message.message}</div>;
    });
    const mappedOldMessages = this.state.old_messages.map(oldMessage => {
        return <p>{oldMessage.message}</p>
    })
    return (
      <div className="messagesContainer">
        <div className="messagesContainer__messages">
          ChatBox
          {mappedOldMessages}
          {mappedMessages}
          <form className="messagesContainer__form">
            <input
              value={this.state.message}
              onChange={e => this.messageHandler(e.target.value)}
              id="m"
              autocomplete="off"
            />
            <button onClick={this.sendPm}>Send</button>
          </form>
        </div>
        <div className="messagesContainer__listingInfo">
         Listing Info
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
      user: state.user,
      room_name: state.room_name
     };
};

export default connect(
  mapStateToProps,
  { getUser }
)(Chatroom);
