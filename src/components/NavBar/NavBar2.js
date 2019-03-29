import React, { Component } from "react";
import { Modal, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.css";
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
      this.props.getUser(res.data);
    });
  };

  // componentDidUpdate = (prevProps) => {
  //   if(this.props.filteredListings !== prevProps.filteredListings){
  //     // this.search
  //   }
  // }
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
    console.log(this.state.searchFilter);
    return (
      <div className="navBar">
        <div className="navBar__title">
          <Link to="/">
            <h1>MusicHub</h1>
          </Link>
        </div>
        <div className="navBar__navInput">
          <input
            onChange={e => this.updateSearch(e.target.value)}
            placeholder="Search MusicHub"
          />
          <Link to="/search_results">
            <button
              className="navBar__searchButton"
              onClick={() => this.searchBarGlobal()}
            >
              Search
            </button>
          </Link>
        </div>
        <div className="navBar__smallNavs">
          <Modal
            trigger={
              <Link
                onClick={this.handleOpen}
                className="item"
                style={{ color: "white" }}
                to="#"
              >
                Sell
              </Link>
            }
            open={this.state.modalOpen}
            onClose={this.handleClose}
          >
            <Header>Upload an item</Header>
            <Modal.Content>
              <SellModal close={this.handleClose} />
            </Modal.Content>
          </Modal>

          <Link to="/messages">
            <h2>Messages</h2>
          </Link>
          {!this.props.user ? (
            <button onClick={() => this.login()}>Login</button>
          ) : (
            <Link to="/">
              <h2>{this.props.user.profile_name}</h2>
              <button onClick={() => this.logout()}>Logout</button>
            </Link>
          )}
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
