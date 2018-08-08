import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

export class Player extends Component {
  render() {
    const { id, life } = this.props;
    return (
      <Card className="mb-2">
        <CardHeader>Player {id}</CardHeader>
        <CardBody>{life}</CardBody>
      </Card>
    );
  }
}

export default Player;
