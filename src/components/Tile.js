import React, { Component } from 'react';
import AugustusGloop from '../hog-imgs/augustus_gloop.jpg'
import BayOfPigs from '../hog-imgs/bay_of_pigs.jpg'
import Cherub from '../hog-imgs/cherub.jpg'
import GalaxyNote from '../hog-imgs/galaxy_note.jpg'
import LeggoMyEggo from '../hog-imgs/leggo_my_eggo.jpg'
import Mudblood from '../hog-imgs/mudblood.jpg'
import PiggySmalls from '../hog-imgs/piggy_smalls.jpg'
import Porkchop from '../hog-imgs/porkchop.jpg'
import Rainbowdash from '../hog-imgs/rainbowdash.jpg'
import Sobriety from '../hog-imgs/sobriety.jpg'
import TheProsciuttoConcern from '../hog-imgs/the_prosciutto_concern.jpg'
import Trouble from '../hog-imgs/trouble.jpg'
import TruffleShuffle from '../hog-imgs/truffleshuffle.jpg'

const tileStyle = {
  textAlign: "left",
  padding: "20px"
}

export default class Tile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      greased: this.props.hogData.greased,
      display: ""
    }
  }

  whichHogLogic = () => {
    switch(this.props.hogData.name) {
      case 'Mudblood':
        return Mudblood;
      case 'Porkchop':
        return Porkchop;
      case 'Cherub':
        return Cherub;
      case 'Piggy smalls':
        return PiggySmalls;
      case 'Trouble':
        return Trouble;
      case 'Sobriety':
        return Sobriety;
      case 'Rainbowdash':
        return Rainbowdash;
      case 'TruffleShuffle':
        return TruffleShuffle;
      case 'Bay of Pigs':
        return BayOfPigs;
      case 'The Prosciutto Concern':
        return TheProsciuttoConcern;
      case 'Galaxy Note':
        return GalaxyNote;
      case 'Leggo My Eggo':
        return LeggoMyEggo;
      case 'Augustus Gloop':
        return AugustusGloop;
      default:
        return "ha"
    }
  }

  tileFlipper = event => {
    if (event.target.type !== "checkbox" && event.target.type !== "button") {
      this.setState({
        flipped: !this.state.flipped
      })
    }
  }

  onChecked = () => {
    console.log("checked");
    this.setState({
      greased: !this.state.greased
    })
  }

  handleButton = () => {
    this.setState({
      display: "none"
    })
  }

  whichSide = () => {
    if (this.state.flipped) {
      return <div style={tileStyle, {display: this.state.display}}>

          <h2> Specialty: {this.props.hogData.specialty} </h2>
          <h2> Weight: {this.props.hogData['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} tonne(s) </h2>
          <h2> Medal: {this.props.hogData['highest medal achieved']} </h2>
          <h2> Greased: <input
            type="checkbox"
            checked={this.state.greased}
            onChange={this.onChecked}
            /> </h2>
          <button type="button" onClick={this.handleButton} style={{display: this.state.display}}>Hide</button>

      </div>
    } else {
      return <div>
        <h1> {this.props.hogData.name} </h1>
        <img src={this.whichHogLogic()} />
      </div>
    }
  }

  render() {
    return (
      <div style={tileStyle, {display: this.state.display}} className="pigTile ui four wide column" onClick={this.tileFlipper}>
        {this.whichSide()}
      </div>
    )
  }
}
