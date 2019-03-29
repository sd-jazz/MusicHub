import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./secondNav.css";
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
      justifyContent: "space-between"
    };
    let dropDownStyle = {
      borderRadius: 0,
      textAlign: "center",
      marginBottom: 0,
      backgroundColor: `rgb(55, 72, 92)`,
      borderRadius: 0,
      text: "white",
      border: 'none'
    };
    let dropDownMenuStyle = {
      textAlign: "center",
      width: '100%'
    };
    return (
      <div className="ui menu" style={uiMenuStyle}>
        <div className="ui simple dropdown " style={dropDownStyle} >
          Orchestral
          <div className="menu" style={dropDownMenuStyle}>
            <h2>Brass</h2>
            <hr></hr>
            <Link className='item' to={`/catagory_view/french_horns`}>
              French Horns
            </Link>
            <Link className='item' to={`/catagory_view/trombones`}>
              Trombones
            </Link>
            <Link className='item' to={`/catagory_view/trumpets`}>
              Trumpets
            </Link>
            <Link className='item' to={`/catagory_view/tubas`}>
              Tubas
            </Link>
            <h2>Brass</h2>
            <hr></hr>
            <Link className='item' to={`/catagory_view/french_horns`}>
              French Horns
            </Link>
            <Link className='item' to={`/catagory_view/trombones`}>
              Trombones
            </Link>
            <Link className='item' to={`/catagory_view/trumpets`}>
              Trumpets
            </Link>
            <Link className='item' to={`/catagory_view/tubas`}>
              Tubas
            </Link>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Dropdown2
          <div className="menu">
            <div className="item">Choice 1</div>
            <div className="item">Choice 2</div>
            <div className="item">Choice 3</div>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Dropdown2
          <div className="menu">
            <div className="item">Choice 1</div>
            <div className="item">Choice 2</div>
            <div className="item">Choice 3</div>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Dropdown2
          <div className="menu">
            <div className="item">Choice 1</div>
            <div className="item">Choice 2</div>
            <div className="item">Choice 3</div>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Dropdown2
          <div className="menu">
            <div className="item">Choice 1</div>
            <div className="item">Choice 2</div>
            <div className="item">Choice 3</div>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Dropdown2
          <div className="menu">
            <div className="item">Choice 1</div>
            <div className="item">Choice 2</div>
            <div className="item">Choice 3</div>
          </div>
        </div>
        <div className="ui simple dropdown" style={dropDownStyle}>
          Dropdown2
          <div className="menu">
            <div className="item">Choice 1</div>
            <div className="item">Choice 2</div>
            <div className="item">Choice 3</div>
          </div>
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