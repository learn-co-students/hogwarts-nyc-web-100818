import React from 'react'
import PigDeets from './PigDeets'

export default class Pig extends React.Component {

  state = {
    flipped: false
  }

  getImage = () => {
    const name = this.props.name
    const parsedName = name ? name.toLowerCase().split(' ').join('_') : null
    return parsedName
  }

  getDeets = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  renderCard = () => {
    if (this.state.flipped === false) {
      return (
        <div>
          <h2 >{this.props.name}</h2>
          <div className='image'>
            <img src={require(`../hog-imgs/${this.getImage()}.jpg`)} />
          </div>
        </div>
      )
    } else {
      return (<PigDeets pig={this.props.pig} />)
    }
  }

  render() {
    return (
      <div data-name={this.props.name} className='ui four wide column pigTile' onClick={this.getDeets}>
        {this.renderCard()}
      </div>
    )
  }

}
