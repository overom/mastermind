import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { recherche: 0, resultat: "", try: 0, position: "" };
    this.handlechange = this.handlechange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handlechange(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      recherche: this.state.recherche
    });
  }
  handlesubmit(e) {
    e.preventDefault();
    const essai = this.setState({ try: this.state.try + 1 });
    console.log(`essai : ${this.state.try}`);
    const proposition = parseInt(this.state.recherche, 10);
    const objectif = this.props.nb;
    console.log(`proposition : ${proposition} objectif : ${objectif}`);
    console.log(`calcul : ${objectif - proposition}`);
    if (proposition === objectif) {
      this.setState({ resultat: "Bravo" });
    } else if (objectif - proposition <= 2 && objectif - proposition >= -2) {
      this.setState({ resultat: "Chaud" });
    } else if (objectif - proposition <= 5 && objectif - proposition >= -5) {
      this.setState({ resultat: "Moyen" });
    } else {
      this.setState({ resultat: "Froid" });
    }
    if (objectif > proposition) {
      this.setState({ position: "Bigger" });
    } else {
      this.setState({ position: "Smaller" });
    }
  }
  render() {
    return (
      <div>
        {this.state.try < 4 ? (
          <Container className="gameAlign">
            <Row className="justify-content-center">
              <div className="col-md-5 mx-auto">
                <Form onSubmit={this.handlesubmit}>
                  <FormGroup>
                    <ul
                      className="nav nav-pills mb-3 justify-content-center"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-home-tab"
                          data-toggle="pill"
                          href="#pills-home"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          EASY
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-profile-tab"
                          data-toggle="pill"
                          href="#pills-profile"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          MEDIUM
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-contact-tab"
                          data-toggle="pill"
                          href="#pills-contact"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          HARD
                        </a>
                      </li>
                    </ul>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      onChange={e =>
                        this.setState({
                          recherche: e.target.value
                        })
                      }
                      placeholder="enter number"
                      className="text-center violet"
                      type="number"
                    />
                  </FormGroup>
                  <FormGroup>
                    {" "}
                    <Button
                      type="submit"
                      className="btn btn-lg btn-success btn-block text-bold h1"
                    >
                      Guess
                    </Button>
                  </FormGroup>
                </Form>
                {this.state.resultat === "Bravo" ? (
                  <i
                    className="fas fa-trophy fa-5x mr-2"
                    style={{ color: "gold" }}
                  >
                    Bravo
                  </i>
                ) : null}
                {this.state.resultat === "Chaud" ? (
                  <i
                    class="fas fa-thermometer-three-quarters fa-5x mr-2"
                    style={{ color: "red" }}
                  >
                    Warm {this.state.position}
                  </i>
                ) : null}
                {this.state.resultat === "Moyen" ? (
                  <i
                    class="fas fa-thermometer-three-quarters fa-5x mr-2"
                    style={{ color: "yellow" }}
                  >
                    Medium {this.state.position}
                  </i>
                ) : null}
                {this.state.resultat === "Froid" ? (
                  <i
                    class="fas fa-thermometer-three-quarters fa-5x mr-2"
                    style={{ color: "blue" }}
                  >
                    Cold {this.state.position}
                  </i>
                ) : null}
              </div>
              <p>{this.props.nb}</p>
            </Row>
            <Row>
              <Col>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    One
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    Two
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    Three
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container className="gameAlign">
            <Row className="justify-content-center">
              <div className="col mx-auto">
                <h1>Vous avez perdu !</h1>
                <i
                  class="far fa-times-circle fa-5x mr-2"
                  style={{ color: "red" }}
                />
              </div>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default Game;
