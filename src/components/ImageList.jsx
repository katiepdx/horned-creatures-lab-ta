import React, { Component } from 'react'
import ImageItem from './ImageItem';

export default class ImageList extends Component {
  render() {
    return (
      <div className="image-list">
        {this.props.creatures.map(creature => <ImageItem image={creature} key={creature.title}/>)}
      </div>
    )
  }
}
