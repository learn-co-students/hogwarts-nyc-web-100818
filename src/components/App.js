import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer.js'
import Search from './Search.js'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs
    }
  }

  toBoolean = (value) => {
    return (value === "true") ? true : false
  }

  filterHogsByGreased = (event) => {
    event.preventDefault();
    if (event.target.value === "all") {
      this.setState({
        hogs: hogs
      })
    } else {
      let filter = this.toBoolean(event.target.value)
      this.setState({
        hogs: hogs.filter(hog => hog.greased === filter)
      })
    }
  }

  sortHogs = (event) => {
    event.preventDefault()
    switch (event.target.value) {
      case "name-ascending":
        return this.setState({
              hogs: this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            })
      case "name-descending":
        return this.setState({
              hogs: this.state.hogs.sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))
            })
      case "weight-ascending":
        return this.setState({
              hogs: this.state.hogs.sort((a,b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : ((b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? -1 : 0))
            })
      case "weight-descending":
        return this.setState({
              hogs: this.state.hogs.sort((a,b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? -1 : ((b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : 0))
            })
      default:
        return "la"
    }
    // if (event.target.value === "name") {
    //   this.setState({
    //     hogs: this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    //   })
    // } else if (event.target.value === "weight") {
    //   this.setState({
    //     hogs: this.state.hogs.sort((a,b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : ((b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? -1 : 0))
    //   })
    // }
  }

  render() {
    return (
      <div className="App">
          < Nav />
        < Search hogData={this.state.hogs} sortHogs={this.sortHogs} greasedFilter={this.filterHogsByGreased}/>
          < HogContainer hogData={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
