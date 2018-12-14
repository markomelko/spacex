import React, { Component } from "react";

import Moment from "react-moment";

import "./nextlaunch.css";

export default class nextlaunch extends Component {
  state = {
    nextflight: "",
    showrest: false
  };

  componentDidMount() {
    const data = sessionStorage.getItem("spacex-nextflight-data");
    this.setState({ nextflight: JSON.parse(data) });
  }

  render() {
    if (this.state.nextflight) {
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
                <span className="badge badge-pill badge-secondary">
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
                <button type="button" className="btn btn-secondary btn-sm">
                  Following launches
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <p> Loading..</p>;
    }
  }
}
