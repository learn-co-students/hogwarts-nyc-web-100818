import React, { Component } from 'react';
import hogs from '../porkers_data';
import HogFront from './HogFront.js'



export default class HogContainer extends Component{


  render(){
    return (
      <div className="ui grid container">
        {hogs.map(hog => {
          return (
            <HogFront key={hog.name} name={hog.name} specialty={hog.specialty}  greased={hog.greased} medal={hog['highest medal achieved']} weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}/>
          )
        })}
      </div>
    )
  }
}
