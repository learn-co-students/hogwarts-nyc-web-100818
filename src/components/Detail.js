import React from 'react'
import Spec from './Spec'

export default class Detail extends React.Component{

  state = {
    isClicked: false,
    isHidden: false
  }

 getHogImg = () => {
    let img = this.props.hog.name.toLowerCase()
    img = img.replace(/\s/g, "_")
    return img
  }


  handleClickedName= () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  handleClickedButton=() =>{
    this.setState({isHidden: !this.state.isHidden})
  }


render(){

  return (
    <div className="ui card" onClick={this.handleClickedName} title="Click DA PIG" style={{cursor: "pointer", display: (this.state.isHidden ? "none" : "")}}>
      <div className="image">
        <img alt={this.props.hog.name} src={require(`../hog-imgs/${this.getHogImg()}.jpg`)}/>
      </div>
    <div className="content">

    <a className="header" >{this.props.hog.name}</a>
      {this.state.isClicked && <Spec hog={this.props.hog} handleClickedButton={this.handleClickedButton} />}
    </div>

    <div className="extra content">
      <a style={{color: this.props.hog['highest medal achieved']}}>
        <i className="user icon"></i>
          {this.props.hog['highest medal achieved']}
      </a>
    </div>
  </div>
  )
}

}


// {this.state.isClicked && <Spec hog={this.props.hog} />} GAME CHANGERRRRRRRRRRR!!!!!!!!!!!!!!!!!!!!!
//  will run second if first is true
