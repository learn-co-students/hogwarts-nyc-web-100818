import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogwarts from './Hogwarts'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <Hogwarts hogs={hogs}/>

      </div>
    )
  }
}

export default App;


///NOTES: hogs are just being imported and passed on to Hogwarts. No need for this.props PASSING THRU
