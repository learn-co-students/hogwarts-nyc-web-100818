import React from 'react';
import hogs from '../porkers_data';
import SingleHog from './SingleHog'
import HogList from './HogList'

// class component bc it has STATE
class HogContainer extends React.Component {

  state = {
    pigData: hogs
  }

  handleClick = (event) => {
    console.log("handleClick triggered in hog container")
    console.log(event.target);
    this.setState({

    })
  }

  render() {
    // console.log("HogContainer STATE is", this.state);
    return (
      <div className="ui grid container">
      <HogList pigData={this.state.pigData} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default HogContainer;
