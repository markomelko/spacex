import React, { Component } from "react";

import "./chart1.css";

import { calcGetGasoline } from "../../utils/calc";

export default class chart1 extends Component {
  componentDidMount() {
    // ..
    console.log("data tests", calcGetGasoline());
  }

  render() {
    return (
      <div>
        <div className="row md-3">
          <div className="col-md-12 text-left">
            <h4>Numerically</h4>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 chart__bg" />
          </div>
        </div>
      </div>
    );
  }
}
