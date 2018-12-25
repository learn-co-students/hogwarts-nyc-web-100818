import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogListContainer from "../containers/HogListContainer";

// App component is responsible for :
// 1) rendering Nav component
// 2) rendering HogListContainer component

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogListContainer />
      </div>
    );
  }
}

export default App;
