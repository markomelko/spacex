import React, { Component } from "react";

import "./chart1.css";

export default class chart1 extends Component {
  componentDidMount() {
    // ..
  }

  render() {
    return (
      <div>
        <div className="row md-3">
          <div className="col-md-12 text-left">
            <h4>Perspective...</h4>
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
