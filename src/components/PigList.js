import React, { Component } from 'react'
import Tile from './Tile.js'
import porkersData from '../porkers_data.js'


export default class PigList extends Component {

  state = { pigData: porkersData, nameFilter: '', greased: 'checked', notGreased: 'checked'}

  onNameChange = (event) => {

    this.setState({nameFilter: event.target.value})
    let filteredInfo = porkersData.filter( el => ((el['name']).toLowerCase()).includes(event.target.value)  )
    this.setState( { pigData: filteredInfo  } )
  }

  onWeightChange = (event) => {

    let weightArr = []
    porkersData.filter( function(el) {
      for (let key in el) {
        if (key.includes('weight')) {
          if (el[key] <= Number(event.target.value)) {
            console.log(el[key])
              weightArr.push(el)
          }
        }
      }
    })
    this.setState( { pigData: weightArr  } )
  }

  isGreased = (event) => {
    let name = event.target.name
    let checker = ''
    this.state[name] === 'checked' ? checker = '' : checker = 'checked'
    this.setState( { [event.target.name]: checker } )

    let filteredInfo = porkersData.filter( function(el) {
      if ( this.state[name] === 'checked' && name === 'greased' ) {
        el['greased'] = true
      }
      if ( this.state[name] === 'checked' && name === 'notGreased' ) {
        el['greased'] = false
      }

    })

    this.setState( { pigData: filteredInfo  } )
  }

  render() {

    return (
        <div>
        <div>
        <input value={this.state.nameFilter} onChange={this.onNameChange} type="text" placeholder="name"/>

        <p>Weight: </p><select onChange={this.onWeightChange}>
          <option value="none">none</option>
          <option value="1.0">Maximum weight: 1.0</option>
          <option value="3.0">Maximum weight: 3.0</option>
          <option value="5.0">Maximum weight: 5.0</option>
          <option value="7.0">Maximum weight: 7.0</option>
        </select>

        <p>Greased: <input name="greased" onChange={this.isGreased}type="checkbox" checked={this.state.greased}/></p>
        <p>Not Greased: <input name="notGreased" onChange={this.isGreased} type="checkbox" checked={this.state.notGreased}/></p>
        </div>

            <div>{this.state.pigData.map( pig => <Tile key={pig.name} dataInfo={pig} />  )}</div>


        </div>


    )


  }

}
