import React, { Component } from "react";
import Moment from "react-moment";

import "./chart1.css";

import { calcGetGasoline } from "../../utils/calc";

export default class chart1 extends Component {
  state = {
    payload: ""
  };

  componentDidMount() {
    // console.log("MASS for all past launches", calcGetGasoline());

    const allPast = JSON.parse(sessionStorage.getItem("spacex-pastflights"));

    calcGetGasoline(allPast).then(mass => {
      this.setState({ payload: mass });
    });
  }

  render() {
    if (!this.state.payload) {
      return <p>Calculating...</p>;
    } else {
      return (
        <div>
          <div className="row md-3">
            <div className="col-md-12 text-left">
              <h4>Numbers...</h4>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 chart__bg">
                <ul>
                  <li>
                    <strong>First SpaceX launch:</strong>{" "}
                    <span className="text-primary">
                      <Moment parse="YYYY-MM-DD HH:mm">
                        2006-03-25T10:30:00+12:00{" "}
                      </Moment>
                    </span>
                  </li>
                  <li>
                    <strong>Payloads to space total mass:</strong>{" "}
                    <span className="text-primary">
                      {this.state.payload.toFixed(2)} kg
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>Continues..</strong>{" "}
                    <span className="text-primary">
                      There will be more calculations when time to update app,
                      please give commets etc to marko.melko@live.com -MM{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
