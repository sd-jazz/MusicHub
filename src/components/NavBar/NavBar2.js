import React, { Component } from "react";
import { Modal, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.css";
import "./NavBar2.css";
import axios from "axios";
import { getUser } from "../../redux/reducer";
// import { throws } from 'assert';
import SellModal from "../Modal/Modal";

class NavBar2 extends Component {
  constructor() {
    super();

    this.state = {
      searchFilter: "",
      filteredListings: []
    };
  }
  componentDidMount = () => {
    axios.get("/api/get_listings", this.state.searchFilter).then(res => {
      this.setState({ filteredListings: res.data });
    });
    axios.get(`/api/user_data`).then(res => {
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
    console.log("GLOBAL SEARCH FIRST", this.state.searchFilter);
    axios.get(`/api/listing/search/${searchFilter}`).then(res => {
      console.log("GLOBAL SEARCH", res);
      this.setState({ filteredListings: res.data });
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
      width: 300,
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
          <div className="right menu">
            <Modal
              trigger={
                <Link className="item" style={{ color: "white" }} to="#">
                  Sell
                </Link>
              }
            >
              <Header>Upload an item</Header>
              <Modal.Content>
                <SellModal />
              </Modal.Content>
            </Modal>
            <Link style={{ color: "white" }} className="item" to="/messages">
              Messages
            </Link>
            {!this.props.user ? (
              <Link
                to="#"
                className="item"
                style={{ color: "white" }}
                onClick={() => this.login()}
              >
                Login
              </Link>
            ) : (
              <Link
                className="item"
                to="/"
                style={{ color: "white" }}
                onClick={() => this.logout()}
              >
                <h2 style={{ color: "white" }}>
                  {this.props.user.profile_name}
                </h2>
                Logout
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.user,
    preset: state.preset
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(NavBar2);

//////COMPONENT ESSENTIALS
{
  /* <Link to="/">
  <h1>MusicHub</h1>
</Link>; */
}

// {/* <input
//   onChange={e => this.updateSearch(e.target.value)}
//   placeholder="Search MusicHub"
// />; */}

// {/* <Link to="/search_results">
//   <button
//     classNameName="navBar__searchButton"
//     onClick={() => this.searchBarGlobal()}
//   >
//     Search
//   </button>
// </Link>; */}

// {/* <Modal trigger={<button>Sell</button>}>
// <Header>Upload an item</Header>
// <Modal.Content>
//   <SellModal />
// </Modal.Content>
// </Modal> */}

// {/* <Link to="/messages">
//   <h2>Messages</h2>
// </Link>; */}

// {
//   !this.props.user ? (
//     <button onClick={() => this.login()}>Login</button>
//   ) : (
//     <Link to="/">
//       <h2>{this.props.user.profile_name}</h2>
//       <button onClick={() => this.logout()}>Logout</button>
//     </Link>
//   );
// }
