import React from 'react'
import Detail from './Detail'

const List = props =>{

  const mapEachHog = props.hogs.map((hog) => {
    return <Detail key={hog.name} hog={hog}/>
  })

return(
  <div className="ui container">
    <br/>
    <div className="ui cards">{mapEachHog}</div>
  </div>
  )

}

export default List
