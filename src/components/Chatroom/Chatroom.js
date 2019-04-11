import React, { Component } from "react";
import io from "socket.io-client";
import axios from "axios";
import { getUser, get_room_name } from "../../redux/reducer";
import { connect } from "react-redux";
import './chatroom.css'

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
      listing: [
        {
          description: "",
          email: "",
          listing_id: "",
          listing_name: "",
          price: "",
          profile_name: "",
          sold: false,
          tags: "",
          time_stamp: "",
          type: "",
          user_id: "", 
          images: [],
          zipcode: null,
        }
      ],
      recipient: "",
      room_data: [],
      old_messages: []
    };

    this.socket = io("localhost:4010");

    this.socket.on("PM_MESSAGE", data => {
      this.addMessage(data);
    });
  }

  componentDidMount = () => {
    axios
      .get(`/api/get_chatroom_by_room_name/${this.props.room_name}`)
      .then(res => {
        this.setState({ room_data: res.data });
      });
    axios.get(`/api/get_room_data/${this.props.room_name}`).then(res => {
      this.setState({ old_messages: res.data });
    });
    axios.get(`/api/listings/${this.props.listing_id}`).then(res => {
        this.setState({listing: res.data})
    });
    this.socket.emit('JOIN_ROOM', {
        room_name: this.props.room_name
    })
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.listing !== this.state.listing){
        this.setState({listing: this.state.listing})
    }
  }

  componentWillUnmount = () => {
      this.socket.emit('LEAVE_ROOM', {
          room_name: this.props.room_name
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
      sender: this.props.user.profile_name,
      recipient: this.state.room_data[0].user2_name
    });
    this.setState({ message: "" });
  };

  messageHandler = val => {
    this.setState({ message: val});
  };

  render() {
    let {listing} = this.state  
    let inputStyle = {
        height: 25,
        width: 350,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      };
      let buttonStyle = {
        height: 25,
        fontSize: 10,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        background: '#546D8C',
      };
    
    const mappedMessages = this.state.messages.map(message => {
      if (this.props.user.profile_name === message.sender) {
        return <p className='myMessages' style={{alignSelf: 'flex-start'}}>{message.message}</p>;
      } else {
        return <p className='theirMessages' style={{ alignSelf: 'flex-end' }}>{message.message}</p>;
      }
    });
    const mappedOldMessages = this.state.old_messages.map(oldMessage => {
      if (this.props.user.profile_name === oldMessage.sender) {
        return <p className='myMessages' style={{ alignSelf: 'flex-start' }}>{oldMessage.message}</p>;
      } else {
        return <p className='theirMessages' style={{ alignSelf: 'flex-end' }}>{oldMessage.message}</p>;
      }
    });
    return (
      <div style={{display: 'flex', color: 'black'}}>
      <div className="messagesContainer" style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'column'}} className="messagesContainer__messages">
          {mappedOldMessages}
          {mappedMessages}
          
        </div>
        <form className="messagesContainer__form">
            <input
            style={inputStyle}
              className='ui input focus'
              value={this.state.message}
              onChange={e => this.messageHandler(e.target.value)}
              id="m"
              autocomplete="off"
            />
            <button className='ui primary button' style={buttonStyle} onClick={this.sendPm}>Send</button>
          </form>
      </div>
        <div className='listingInfo' style={{width: '20%', height: '100%'}}>
        <img className='listingInfo__image' src={listing[0].images}/>
        <h1 className='listingInfo__name'>{listing[0].listing_name}</h1>
        <h3 className='listingInfo__price'>${listing[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
        </div>
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
  { getUser }
)(Chatroom);
