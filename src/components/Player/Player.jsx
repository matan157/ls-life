import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

export class Player extends Component {
  render() {
    const { id, life, increment, decrement } = this.props;
    return (
      <Card className="mb-2">
        <CardHeader>Player {id + 1}</CardHeader>
        <CardBody>
          <Row>
            <Col xs="12" className="text-center">
              <h1>{life}</h1>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <Button color="success" block onClick={increment}>
                <FaPlus />
              </Button>
            </Col>
            <Col xs="6">
              <Button color="info" block onClick={decrement}>
                <FaMinus />
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

Player.propTypes = {
  id: PropTypes.number.isRequired,
  life: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default Player;
