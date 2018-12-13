
import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return (
      <div className="ui grid container">
        <select onChange={this.props.sortHogs}>
          <option value="all" >Sort By:</option>
          <optgroup label="Name">
            <option value="name-ascending" >ascending</option>
            <option value="name-descending" >descending</option>
          </optgroup>
          <optgroup label="Weight">
            <option value="weight-ascending" >ascending</option>
            <option value="weight-descending" >descending</option>
          </optgroup>
        </select>
        <select onChange={this.props.greasedFilter}>
          <option value="all" >greased/not-greased</option>
          <option value="true" >greased</option>
          <option value="false" >not-greased</option>
        </select>
      </div>

    );
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
