import React, { Component } from 'react';


export default class HogBack extends Component {
constructor(props){
  super(props);
  this.state = {
    specialty: this.props.specialty,
    greased: this.props.greased,
    'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': this.props.weight,
    'highest medal achieved': this.props.medal,
    show: false
  }
  console.log(this.state);
}




  render(){
    return (
      <div>
      <span>Specialty: {this.props.specialty}</span>
      <p> Greased: {this.props.greased} </p>
      <p> Weight: {this.props.weight} </p>
      <p> Medal: {this.props.medal} </p>
      </div>
    )
  }

}
