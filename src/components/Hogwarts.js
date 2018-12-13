import React from 'react'
import List from './List'
import Filter from './Filter'

export default class Hogwarts extends React.Component{
  state = {
    hogs: this.props.hogs
  }

  updateHogList = (formValues) => {

    let copyOrigHogz = [...this.state.hogs]
      if (formValues.greased) {
          copyOrigHogz = copyOrigHogz.filter(eachHog => eachHog.greased)
          // debugger
      } else {
        copyOrigHogz = [...this.props.hogs]
      }
    if (formValues.sort.length > 0){
      copyOrigHogz.sort((hogA, hogB)=> {
        if (hogA[formValues.sort] < hogB[formValues.sort]){
          return -1
        }
        if (hogA[formValues.sort] > hogB[formValues.sort]){
          return 1
        }
        return 0
      })

    }




    this.setState({hogs: copyOrigHogz})
  }


  render(){
    return(
      <div>
        <Filter updateHogList={this.updateHogList}/>
        <div className="ui divider"></div>
        <List hogs={this.state.hogs}/>
      </div>
    )
  }



}
//NOTE: FRAGMENT ALTERNATIVE: USE ARRAY FOR RETURN. Fragment is basically doing the same - returning div/s in arr
