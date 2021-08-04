import React, { Component } from 'react'

export default class Dropdown extends Component {
  render() {
    const dropdownOptions = this.props.options
    const handleChange = this.props.onChange
    
    return (
      <select onChange={handleChange}>
        {
          dropdownOptions.map(item => <option value={item} key={item}>{item}</option>)
        }
      </select>
    )
  }
}
