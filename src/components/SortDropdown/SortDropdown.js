import React, { Component } from 'react'
import './SortDropdown.css'

export default class SortDropdown extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }


  render() {    
    return (
      <div>
        <select className='dropdown' onChange={(e) => this.props.fireSortFunctions(e)}>
            <option>Sort by:</option>
            <option value="PLH">Price: Low to High</option>
            <option value="PHL">Price: High to Low</option>
            {/* <option value="DHL">Date: Newest</option>
            <option value="DLH">Date: Oldest</option> */}
            {/* <option>Location</option> */}
        </select>
      </div>
    )
  }
}
