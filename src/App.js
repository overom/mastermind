import React, { Component } from "react";
import Bandeau from "./Bandeau";
import Game from "./Game";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nb: this.getRandomInt(30) };
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    return (
      <div>
        <Bandeau />
        <Game nb={this.state.nb} />
      </div>
    );
  }
}

export default App;
