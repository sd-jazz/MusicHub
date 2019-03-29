import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./secondNav.css";
import { connect } from "react-redux";
import { get_listing_type } from "../../redux/reducer";
class SecondNav2 extends Component {
  constructor() {
    super();
    this.state = {};
  }
  showMenu(prop, val) {
    this.setState({
      [prop]: !val
    });
  }
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target))
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
  }
  render() {
    console.log();
    let uiMenuStyle = {
      justifyContent: "space-between",
      backgroundColor: 'black',
      borderRadius: 0
    };
    let dropDownStyle = {
      borderRadius: 0,
      textAlign: "center",
      marginBottom: 0,
      borderRadius: 0,
      textDecoration: "none",
      border: "none",
      backgroundImage: 'none',
      backgroundColor: '#333333',
      color: 'white'
    };
    let dropDownMenuStyle = {
      textAlign: "center",
      width: "100%"
    };

    let itemStyle = {
        textDecoration: 'none',
        backgroundColor: 'white'
    }
    return (
      <div className="ui menu" style={uiMenuStyle}>
        <div className="ui simple dropdown " style={dropDownStyle}>
          Orchestral
          <div className="menu" style={dropDownMenuStyle}>
            <Link className="item" to={`/catagory_view/brass`}>
              Brass
            </Link>
            <Link className="item" to={`/catagory_view/percussion`}>
              Percussion
            </Link>
            <Link className="item" to={`/catagory_view/strings`}>
              Strings
            </Link>
            <Link className="item" to={`/catagory_view/woodwinds`}>
              Woodwinds
            </Link>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Guitars
          <div className="menu" style={dropDownMenuStyle}>
            <Link className="item" to={`/catagory_view/bass_guitars`}>
              Bass Guitars
            </Link>
            <Link className="item" to={`/catagory_view/acoustic_guitars`}>
              Acoustic Guitars
            </Link>
            <Link className="item" to={`/catagory_view/electric_guitars`}>
              Electric Guitars
            </Link>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Keyboards
          <div className="menu" style={dropDownMenuStyle}>
            <Link className="item" to={`/catagory_view/pianos`}>
              Pianos
            </Link>
            <Link className="item" to={`/catagory_view/electric_piano`}>
              Electric Pianos
            </Link>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Drums
          <div className="menu" style={dropDownMenuStyle}>
            <Link className="item" to={`/catagory_view/bass_drums`}>
              Bass Drums
            </Link>
            <Link className="item" to={`/catagory_view/cymbals`}>
              Cymbals
            </Link>
            <Link className="item" to={`/catagory_view/hi_hats`}>
              Hi-Hats
            </Link>
            <Link className="item" to={`/catagory_view/kits`}>
              Kits
            </Link>
            <Link className="item" to={`/catagory_view/snares`}>
              Snares
            </Link>
            <Link className="item" to={`/catagory_view/electric_piano`}>
              Tom-Toms
            </Link>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Audio Equipment
          <div className="menu" style={dropDownMenuStyle}>
            <Link className="item" to={`/catagory_view/cables`}>
              Cables
            </Link>
            <Link className="item" to={`/catagory_view/headphones`}>
              Headphones
            </Link>
            <Link className="item" to={`/catagory_view/microphones`}>
              Microphones
            </Link>
            <Link className="item" to={`/catagory_view/midi`}>
              Midi
            </Link>
            <Link className="item" to={`/catagory_view/turntables`}>
              Turntables
            </Link>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Services
          <div className="menu" style={dropDownMenuStyle}>
          <Link className="item" to={`/catagory_view/turntables`}>
              Turntables
            </Link>
          <Link className="item" to={`/catagory_view/turntables`}>
              Turntables
            </Link>
          <Link className="item" to={`/catagory_view/turntables`}>
              Turntables
            </Link>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          <Link className={itemStyle} to={`/catagory_view/other`}>Other</Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = reducerState => {
  return {
    listing_type: reducerState.listing_type
  };
};
export default connect(
  mapStateToProps,
  { get_listing_type }
)(SecondNav2);
/////SECOND NAV ESSENTIALS
