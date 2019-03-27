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
        <select className='dropdown'>
            <option>Sort by:</option>
            <option>Date</option>
            <option>Price</option>
            <option>Location</option>
        </select>
      </div>
    )
  }
}
