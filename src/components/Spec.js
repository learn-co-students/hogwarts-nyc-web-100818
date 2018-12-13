import React from 'react'



const Spec = props => {
  const deleteHog = (e) => {
    e.stopPropagation()
    props.handleClickedButton()
  }

  return (
      <div>
        <div className="meta">
        <span className="date">{props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</span>
        </div>

        <div className="description">
          {props.hog.specialty}
        </div>

        <button className="ui red button" onClick={deleteHog}>AVADA KEDAVRA 🐍 🧙🏻 🐖 ‍ </button>
      </div>
  )
}

export default Spec
