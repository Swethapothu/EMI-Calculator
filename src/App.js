import React from "react";
import { Row, Col, Button, Form, FormControl } from "react-bootstrap";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p: "",
      i: "",
      t: "",
      EMI: "",
      year: true,
      month: false,
    };
  }

  CalculateEmi() {
    let EMI;
    const { p, i, t } = this.state;
    EMI =
      (p * (i / 12 / 100) * Math.pow(1 + i / 12 / 100, t)) /
      (Math.pow(1 + i / 12 / 100, t) - 1);
    this.setState({ EMI });
  }

  render() {
    console.log(this.state);
    return (
      <div className="emi">
        <h3>EMI Calculator</h3>
        <br />
        <Row className="App">
          <Row>
            <Col>Enter Amount</Col>
            <Col>
              <FormControl
                onChange={(e) => {
                  this.setState({
                    p: e.target.value,
                  });
                }}
              ></FormControl>
            </Col>
          </Row>
          <Row>
            <Col>Interest</Col>
            <Col>
              <FormControl
                onChange={(e) => {
                  this.setState({
                    i: e.target.value,
                  });
                }}
              ></FormControl>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  Years{" "}
                  <input
                    type="radio"
                    checked={this.state.year}
                    onClick={(e) => {
                      this.setState({ year: e.target.checked, month: false });
                    }}
                  />
                </Col>
                <Col>
                  Months{" "}
                  <input
                    type="radio"
                    checked={this.state.month}
                    onClick={(e) => {
                      this.setState({ month: e.target.checked, year: false });
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <FormControl
                onChange={(e) => {
                  let t = e.target.value;
                  if (this.state.year) {
                    t = t * 12;
                  }
                  this.setState({
                    t,
                  });
                }}
              ></FormControl>
            </Col>
          </Row>
          <Row>
            <Col md={6}></Col>
            <Col md={6}>
              <Button
                onClick={() => {
                  this.CalculateEmi();
                }}
              >
                Calculate
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>Final Amount</Col>
            <Col>
              <FormControl
                type="text"
                value={this.state.EMI}
                disabled
              ></FormControl>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

export default App;
