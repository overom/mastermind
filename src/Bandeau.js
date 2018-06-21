import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./index.css";

class Bandeau extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid bgSize">
          <Row className="bg-dark bgSize justify-content-center d-flex align-items-center ">
            <p className="text-light h1 text-center">
              <i className="fas fa-gamepad mr-3" />
              React Masterminds
            </p>
          </Row>
        </div>
      </div>
    );
  }
}

export default Bandeau;
