import React, { Component } from "react";
import "./messages.css";
import io from "socket.io-client";
import axios from "axios";
import { getUser, get_room_name } from "../../redux/reducer";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      sender_rooms: [],
      recipient_rooms: []
    };
    this.socket = io("localhost:4010");
  }

  componentDidMount = () => {
    axios.get(`/api/get_chatrooms_as_sender/${this.props.user.user_id}`).then(res => {
        this.setState({sender_rooms: res.data})
    })
    axios.get(`/api/get_chatrooms_as_recipient/${this.props.user.user_id}`).then(res => {
        this.setState({recipient_rooms: res.data})
    })
  }
  

  render() {
      console.log(this.state.sender_rooms)
      console.log(this.state.recipient_rooms)
    const mappedSenderRooms = this.state.sender_rooms.map(room => {
          return  <Link onClick={() => this.props.get_room_name(room.room_name)} to={`/messages/${room.room_name}`}>{room.user2_name} - {room.listing_name}</Link>
      })
    const mappedRecipientRooms = this.state.recipient_rooms.map(room => {
          return  <Link onClick={() => this.props.get_room_name(room.room_name)} to={`/messages/${room.room_name}`}>{room.user1_name} - {room.listing_name}</Link>
      })
    return (
      <div>
         {mappedSenderRooms}
         {mappedRecipientRooms}
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
  { getUser, get_room_name }
)(Messages);
