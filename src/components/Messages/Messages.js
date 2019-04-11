import React, { Component } from "react";
import "./messages.css";
import axios from "axios";
import { getUser, get_room_name, update_listing_id } from "../../redux/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      sender_rooms: [],
      recipient_rooms: []
    };
  }

  componentDidMount = () => {
    axios
      .get(`/api/get_chatrooms_as_sender/${this.props.user.user_id}`)
      .then(res => {
        this.setState({ sender_rooms: res.data });
      });
    axios
      .get(`/api/get_chatrooms_as_recipient/${this.props.user.user_id}`)
      .then(res => {
        this.setState({ recipient_rooms: res.data });
      });
  };

  render() {
    let roomContainerStyle = {
      display: "flex",
      flexDirection: "column",
      color: "black",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      textDecoration: "none",
      padding: "5px"
    };

    let messageStyle = {
      color: "black",
      textDecoration: "none",
      padding: "5px"
    };
    const mappedSenderRooms = this.state.sender_rooms.map(room => {
      return (
        <Link
          style={messageStyle}
          onClick={() => {
            this.props.get_room_name(room.room_name);
            this.props.update_listing_id(room.listing_id);
          }}
          to={`/messages/${room.room_name}`}
        >
          {room.user2_name} - {room.listing_name}
        </Link>
      );
    });
    const mappedRecipientRooms = this.state.recipient_rooms.map(room => {
      return (
        <Link
          style={messageStyle}
          onClick={() => {
            this.props.get_room_name(room.room_name);
            this.props.update_listing_id(room.listing_id);
          }}
          to={`/messages/${room.room_name}`}
        >
          {room.user1_name} - {room.listing_name}
        </Link>
      );
    });
    return (
      <div className="messagesContainer">
         {mappedSenderRooms}
         {mappedRecipientRooms}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    room_name: state.room_name,
    listing_id: state.listing_id
  };
};

export default connect(
  mapStateToProps,
  { getUser, get_room_name, update_listing_id }
)(Messages);
