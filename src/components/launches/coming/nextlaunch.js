import React, { Component } from "react";

import Moment from "react-moment";

import _ from "lodash";

import NextLaunchElement from "../coming/single/nextlaunchteaser";

import "./nextlaunch.css";

export default class nextlaunch extends Component {
  state = {
    nextflight: "",
    upcominglaunches: "",
    showrest: false,
    comingCount: ""
  };

  showNextLauncheslist = () => {
    let show = true;
    if (this.state.showrest) {
      show = false;
    }
    this.setState({ showrest: show });
  };

  componentDidMount() {
    const data = sessionStorage.getItem("spacex-nextflight-data");
    const upcoming = JSON.parse(
      sessionStorage.getItem("spacex-upcoming-launches")
    );

    const count = upcoming.length;

    _.tail(upcoming);

    this.setState({
      nextflight: JSON.parse(data),
      upcominglaunches: upcoming,
      comingCount: count
    });
  }

  render() {
    if (this.state.nextflight) {
      let NextFlights = "";

      if (this.state.showrest && this.state.upcominglaunches) {
        NextFlights = this.state.upcominglaunches.map((launch, index) => {
          return <NextLaunchElement key={launch.mission_name} data={launch} />;
        });
      }

      return (
        <div>
          <div className="row">
            <div className="col-md-12 text-left">
              <h4>Next launch</h4>
            </div>
          </div>

          <div className="nextlaunch_container mb-2 text-left">
            <div className="row">
              <div className="col-md-12 mb-1">
                <span className="badge badge-pill badge-danger">
                  Launch: {this.state.nextflight.flight_number} -{" "}
                  {this.state.nextflight.mission_name}
                </span>
              </div>
              <div className="col-md-12">
                <ul>
                  <li>
                    <strong>Launch date: </strong>
                    <Moment parse="YYYY-MM-DD HH:mm" className="text-primary">
                      {this.state.nextflight.launch_date_local}
                    </Moment>
                  </li>
                  <li>
                    <strong>Launch location:</strong>{" "}
                    {this.state.nextflight.launch_site.site_name_long}
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>Mission description: </strong>{" "}
                    {this.state.nextflight.details}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-1 text-center">
                <button
                  type="button"
                  onClick={() => this.showNextLauncheslist()}
                  className="btn btn-info btn-sm"
                >
                  {" "}
                  Coming launches{" "}
                  <span className="badge badge-light">
                    {this.state.comingCount}
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>

          {NextFlights}
        </div>
      );
    } else {
      return <p> Loading..</p>;
    }
  }
}
