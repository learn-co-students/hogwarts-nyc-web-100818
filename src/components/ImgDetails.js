import React, { Component } from 'react'

export default class ImgDetails extends Component {


  render() {
    return (
      <ul>
        <li>Specialty: {this.props.data[1]}</li>
        <li>Greased: {this.props.data[2]}</li>
        <li>Weight: {this.props.data[3]}</li>
        <li>Medal: {this.props.data[4]}</li>
      </ul>
    )

  }

}
