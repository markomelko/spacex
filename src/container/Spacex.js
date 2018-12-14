import React, { Component } from "react";
import Heading from "../components/header/heading";

import Nextlaunch from "../components/launches/coming/nextlaunch";
import Pastlaunches from "../components/launches/past/pastlaunches";
import Chart1 from "../components/charts/chart1";

export class Spacex extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Heading />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Nextlaunch />
            <Chart1 />
          </div>
          <div className="col-md-6">
            <Pastlaunches />
          </div>
        </div>
      </div>
    );
  }
}

export default Spacex;
