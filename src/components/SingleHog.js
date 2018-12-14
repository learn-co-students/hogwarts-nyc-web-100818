import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class SingleHog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  // console.log("SINGLE HOG'S PROPS ARE:", props);
  // each card has its own state
  handleClick = () => {
    console.log(this.state.clicked);
    this.setState({
      clicked: !this.state.clicked
    })
  }

  showDetails = () => {
    const medal = "highest medal achieved"
    return (
      <div>
        <Card.Description>Speciality: {this.props.piggy.specialty}</Card.Description>
        <Card.Meta>Medal: {this.props.piggy[medal]}</Card.Meta>
      </div>
    )
  }


  render () {
    // console.log("hog name slugified", hogNameSlugified)
    const hogNameSlugified = this.props.piggy.name.toLowerCase().replace(/ /g, "_") // "piggy_smalls"


    return (

      <Card>
        <Image onClick={this.handleClick} src={require(`../hog-imgs/${hogNameSlugified}.jpg`)} />
        <Card.Header>{this.props.piggy.name}</Card.Header>
          { this.state.clicked ? this.showDetails() : null }
      </Card>
          )
  }


}

export default SingleHog;


{/* this.state.clicked ? <Card.Description>Speciality: {this.props.piggy.specialty}</Card.Description> : null  */}
{/* this.state.clicked ? <Card.Meta>Medal: {this.props.piggy[medal]}</Card.Meta> : null */}
{/* this.state.clicked ? this.showDetails : null }
if this.state.clicked === true {
  this.showDetails()
} else {
  null
*/}
