import React, { Component } from "react";
import HogList from "../components/HogList";
import HogFilter from "../components/HogFilter";
import hogs from "../porkers_data";

// HogListContainer Component is Responsible for:
//!! 1) Fetching Data and Holding the state
//!! 2) Rendering HogList component - functional, presentatation component
//!! 3) Rendering HogFilter component

class HogListContainer extends Component {
  // initial state is set to equal the hogs array from porkers_data.js
  state = {
    hogs: hogs
  };

  render() {
    return (
      <div className="ui grid container">
        <HogFilter />
        <HogList hogs={this.state.hogs} />
      </div>
    );
  }
}

export default HogListContainer;
