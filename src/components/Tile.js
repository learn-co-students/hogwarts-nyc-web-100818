import React, { Component } from 'react'
import ImgDetails from './ImgDetails.js'
// import porkersData from '../porkers_data.js'


export default class PigList extends Component {

  state = { pigDetails: false }

  handleName = () => {
    return (this.props.dataInfo['name']).toLowerCase().split(' ').join('_')
  }

  info = []

  handleRest = (event) => {
      for (var key in this.props.dataInfo) {
        this.info.push(this.props.dataInfo[key])
    }
    this.setState( { pigDetails: !this.state.pigDetails } )
  }




  render() {
    // console.log(this.props.dataInfo)
    // console.log('__________________________________')
    return (
      <div className='hog-tile'>
        <h3>{this.props.dataInfo['name']}</h3>

        <img onClick={this.handleRest} src={require(`../hog-imgs/${this.handleName()}.jpg`)}  />
        { this.state.pigDetails ?  <ImgDetails data={this.info}/>  : ''}

      </div>

    );
  }


}

// <ImgDetails data={this.state.thisHogData}/>
