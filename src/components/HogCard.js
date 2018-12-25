import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class HogCard extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    console.log(this.state.clicked);
    this.setState({
      clicked: !this.state.clicked
    });
  };

  showDetails = () => {
    const medal = "highest medal acheived";
    const weight =
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

    return (
      <div>
        <Card.Description>
          Specialty: {this.props.hog.specialty}
        </Card.Description>
        <Card.Meta>Medal: {this.props.hog[medal]}</Card.Meta>
        <Card.Meta>Weight:{this.props.hog[weight]} </Card.Meta>
      </div>
    );
  };

  render() {
    const hogNameSlugified = this.props.hog.name
      .toLowerCase()
      .replace(/ /g, "_");

    return (
      <Card>
        <Image
          onClick={this.handleClick}
          src={require(`../hog-imgs/${hogNameSlugified}.jpg`)}
        />
        <Card.Header>{this.props.hog.name} </Card.Header>
        {this.state.clicked ? this.showDetails() : null}
      </Card>
    );
  }
}

export default HogCard;
