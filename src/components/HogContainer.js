import React, { Component } from 'react';
import Tile from './Tile.js'

export default class HogContainer extends Component {

  render() {
    return (
      <div className="ui grid container">
        {this.props.hogData.map((hog, i) => {
          return < Tile key={i} hogData={hog} />
        })}
      </div>
    )
  }
}
