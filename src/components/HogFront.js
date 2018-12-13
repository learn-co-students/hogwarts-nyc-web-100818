import React, { Component } from 'react';
import HogBack from './HogBack'
import ReactDOM from 'react-dom';




export default class HogFront extends Component{
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }



handeClick = (event) => {
  this.setState({
    clicked: !this.state.clicked
  }, )

}





  render(){
    const slugifiedHogName = this.props.name.toLowerCase().replace(/ /g, "_");

    return (
      <div className="ui eight wide column" id="hogFront" onClick={this.handeClick}>
        <h1>{this.props.name}</h1>
        <img className="image" src={require(`../hog-imgs/${slugifiedHogName}.jpg`)} />
        {this.state.clicked ? <div>
            <HogBack />
             <p>Specialty: {this.props.specialty}</p>
             <p>Greased? {this.props.greased}</p>
             <p>Weight Ratio: {this.props.weight}</p>
             <p>{this.props.medal}</p>
           </div> : null}
      </div>

    )
    }


  }




// hogNameSlugified = props.piggy.name.toLowerCase().replace(/ /g, "_")
