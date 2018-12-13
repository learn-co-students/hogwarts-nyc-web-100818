import React from 'react';
import SingleHog from './SingleHog'
// FUNCTIONAL / PRESENTATIONAL COMPONENT - WILL RECEIVE PROPS

const HogList = (props) => {
  // console.log("Hog List is:", props);

  // create a method to map over all da hogz
  const mapHogs = props.pigData.map((piggy) => {
    return <SingleHog key={piggy.name} piggy={piggy} className="ui eight wide column" handleClick={props.handleClick}/>
  })

  return (
      <div className="ui cards">
        {mapHogs}
      </div>
  )
}



export default HogList;
