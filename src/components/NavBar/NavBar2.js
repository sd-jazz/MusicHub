import React, { Component } from "react";
import { Modal, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './NavBar2.css'
import axios from "axios";
import { getUser, get_searched_listings } from "../../redux/reducer";
// import { throws } from 'assert';
import SellModal from "../Modal/Modal";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchFilter: "",
      filteredListings: [],
      modalOpen: false
      // searched_listings: this.props.searched_listings
    };
  }
  componentDidMount = () => {
    axios.get("/api/get_listings", this.state.searchFilter).then(res => {
      this.setState({ filteredListings: res.data });
    });
    axios.get(`/api/user_data`).then(res => {
      console.log('===',res.data)
      this.props.getUser(res.data);
    });
  };
  
  updateSearch = text => {
    this.setState({
      searchFilter: text
    });
    console.log(this.state.searchFilter);
  };
  searchBarGlobal = () => {
    const { searchFilter } = this.state;
    console.log(
      "GLOBAL SEARCH FIRST / this.state.searchFilter",
      this.state.searchFilter
    );
    axios.get(`/api/listing/search/${searchFilter}`).then(res => {
      console.log("GLOBAL SEARCH SECOND", res);
      this.props.get_searched_listings(res.data);
      // this.setState({ filteredListings: res.data });
    });
  };
  login = () => {
    const redirectUri = encodeURIComponent(`${window.location.origin}/auth`);
    window.location = `https://${
      process.env.REACT_APP_AUTH_DOMAIN
    }/authorize?client_id=${
      process.env.REACT_APP_CLIENT_ID
    }&scope=openid%20email%20profile&redirect_uri=${redirectUri}&response_type=code`;
  };
  logout = () => {
    axios.get("/auth/logout").then(res => {
      this.props.getUser(res.data);
    });
  };
  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });
  render() {
    let uiMenuStyle = {
      marginBottom: 0,
      backgroundColor: `rgb(55, 72, 92)`,
      height: 60,
      borderRadius: 0,
      text: "white"
    };
    let inputStyle = {
      height: 25,
      width: 200,
      alignSelf: "center",
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    };
    let searchButtonStyle = {
      height: 25,
      fontSize: 10,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    };
    let dropdownRight = {
    
    }
    let dropdownButton = {
     
    }
    let dropdownBox = {
      height: 40,
      width: 40
    }
    console.log(this.state.searchFilter);
    return (
      <div>
        <div className="ui menu" style={uiMenuStyle}>
          <Link to="/" className="header item">
            <h1 style={{ color: "white", fontSize: 28 }}>MusicHub</h1>
          </Link>
          <div className="ui input" style={inputStyle}>
            <input
              style={inputStyle}
              onChange={e => this.updateSearch(e.target.value)}
              placeholder="Search MusicHub"
            />
            <Link to="/search_results">
              <button
                style={searchButtonStyle}
                className="ui secondary button"
                onClick={() => this.searchBarGlobal()}
              >
                Search
              </button>
            </Link>
          </div>
          {/* <div className="right menu nonDropVisible"> */}
          <div className="one ui right compact menu dropdownVisible" style={dropdownRight}>
          <div className="two ui simple dropdown  dropdownVisible" >
          <div className="three menu dropdownVisible" >
          <Modal
              trigger={
                <Link onClick={this.handleOpen} className="item" style={{ color: "black" }} to="#">
                  Sell
                </Link>
              }
              open={this.state.modalOpen}
              onClose={this.handleClose}
            >
              <Header>Upload an item</Header>
              <Modal.Content>
                <SellModal close={this.handleClose}/>
              </Modal.Content>
            </Modal>
            <Link style={{ color: "black" }} className="item" to="/messages">
              Messages
            </Link>
            {!this.props.user ? (
              <Link
                to="#"
                className="item"
                style={{ color: "black" }}
                onClick={() => this.login()}
              >
                Login
              </Link>
            ) : (
              <div className="ui__loggedIn item">
                <Link
                  className="item"
                  to="/"
                  style={{ color: "white" }}
                  onClick={() => this.logout()}
                >
                Logout
                </Link>
                <Link 
                  className="item"
                  to="/user"
                >
                  <h2 style={{ color: "white" }}>
                    {this.props.user.profile_name}
                  </h2>
                </Link>
              </div>
            )}
          </div>
          </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
let mapStateToProps = state => {
  return {
    user: state.user,
    preset: state.preset,
    searched_listings: state.searched_listings
  };
};
export default connect(
  mapStateToProps,
  { getUser, get_searched_listings }
)(NavBar);