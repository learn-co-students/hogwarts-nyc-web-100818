import React from 'react'


export default class Filter extends React.Component {
  state = {
    sort: "name",
    greased: false
  }

  handleChange = event =>{
    this.setState({[event.target.name]: event.target.value})
  }

  handleCheckBoxClicked = event => {
    this.setState({greased: event.target.checked})
  }

  handleSubmitForm = event => {
    event.preventDefault()
    this.props.updateHogList(this.state)
  }


  render() {
    return(
      <div className="ui container">
      <form className="ui form" onSubmit={this.handleSubmitForm}>
        <div className="field">
          <label>Sort</label>
          <select name="sort" value={this.state.sort} onChange={this.handleChange}>
              <option value="name"> Name </option>
              <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"> Weight </option>
          </select>
        </div>
        <div className="field">
          <label>Greasy BOIZ</label>
          <input name="greased" type="checkbox" value={this.state.greased} onChange={this.handleCheckBoxClicked}/>
        </div>
        <button className="ui primary button" type="submit">Let's goooo</button>
        <br/>
      </form>
      </div>
    )
  }

}
