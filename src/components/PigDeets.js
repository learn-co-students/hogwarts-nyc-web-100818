import React from 'react'

export default class PigDeets extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.pig.name}</h2>
        <p>Specialty: {this.props.pig.specialty}</p>
        <p>Greased: {this.props.pig.greased}</p>
        <p>Weight: {this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Medal: {this.props.pig['highest medal achieved']}</p>
      </div>
    )
  }

}
