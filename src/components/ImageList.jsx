import React, { Component } from 'react'
import ImageItem from './ImageItem';

export default class ImageList extends Component {
  render() {
    const { creatures }= this.props
    return (
      <div className="image-list">
        {creatures.map(creature => <ImageItem image={creature} key={creature.title}/>)}
      </div>
    )
  }
}
