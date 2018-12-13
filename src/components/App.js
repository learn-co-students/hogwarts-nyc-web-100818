import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigStuy from './Pigstuy'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < PigStuy hogs={hogs} />
      </div>
    )
  }
}

export default App;
