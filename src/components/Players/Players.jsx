import React, { Component } from "react";
import { Container, Button } from "reactstrap";

import Player from "../Player";

export class Players extends Component {
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

  onIncrement = index => {
    this.setState(prevState => ({
      ...prevState,
      players: prevState.players.map((p, i) => {
        if (i === index) {
          return p >= 35 ? p : p + 1;
        }
        return p;
      })
    }));
  };

  onDecrement = index => {
    this.setState(prevState => ({
      ...prevState,
      players: prevState.players.map((p, i) => {
        if (i === index) {
          return p <= 0 ? 0 : p - 1;
        }
        return p;
      })
    }));
  };

  render() {
    const { players } = this.state;
    const playerComponents = players.map((playerLife, index) => (
      <Player
        key={index}
        id={index}
        life={playerLife}
        increment={() => this.onIncrement(index)}
        decrement={() => this.onDecrement(index)}
      />
    ));

    return (
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
    );
  }
}
