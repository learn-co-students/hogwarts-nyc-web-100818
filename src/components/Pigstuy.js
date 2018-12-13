import React from 'react'
import Pig from './Pig.js'

export default class PigStuy extends React.Component{
  constructor() {
    super()
    this.state = {
      name: '',
      pig: {}
    }
  }

  renderHogs = () => {
    return this.props.hogs.map(hog => <Pig name={hog.name} key={hog.name} getDeets={this.getDeets} pig={hog} />)
  }

  render() {
    return (
      <div className='ui grid container'>
        {this.renderHogs()}
      </div>
    )
  }

}
