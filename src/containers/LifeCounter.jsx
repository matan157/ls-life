import React, { Component } from "react";
import { Navbar, NavbarBrand, Container, Button, Row, Col } from "reactstrap";

import Player from "../components/Player";

export class LifeCounter extends Component {
  state = {
    players: [30]
  };

  addPlayerHandler = () => {
    this.setState(prevState => ({
      ...prevState,
      players: [...prevState.players, 30]
    }));
  };

  resetScoresHandler = () => {
    this.setState(prevState => ({ players: prevState.players.map(p => 30) }));
  };

  resetPlayersHandler = () => {
    this.setState({ players: [30] });
  };

  render() {
    const { players } = this.state;
    const playerComponents = players.map((playerLife, index) => (
      <Player key={index} id={index} life={playerLife} />
    ));

    return (
      <div>
        <Navbar color="light" light className="mb-2">
          <NavbarBrand>LS Life Counter</NavbarBrand>
        </Navbar>
        <Container fluid>
          <Button color="primary" block onClick={this.resetScoresHandler}>
            Reset Scores
          </Button>
          <Button color="danger" block onClick={this.resetPlayersHandler}>
            Reset Players
          </Button>
          <div className="mb-2 mt-2">{playerComponents}</div>
          <Button color="primary" block outline onClick={this.addPlayerHandler}>
            Add Player
          </Button>
        </Container>
      </div>
    );
  }
}

export default LifeCounter;
