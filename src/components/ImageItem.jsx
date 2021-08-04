import React, { Component } from 'react'

export default class ImageItem extends Component {
  render() {
    const { image } = this.props
    return (
      <img src={image.url} alt={image.title}/>
    )
  }
}
