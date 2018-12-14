import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import "./pastflightteaser.css";

export default class pastflightteaser extends Component {
  state = {
    mission_patch: "",
    launch_number: "",
    launch_date_local: "",
    launch_site_name: "",
    launch_success: "",
    mission_name: "",
    rocket_name: "",
    image_count: "",
    details: ""
  };

  updateState() {
    this.setState({
      mission_patch: this.props.flight.links.mission_patch,
      launch_number: this.props.flight.flight_number,
      launch_date_local: this.props.flight.launch_date_local,
      launch_site_name: this.props.flight.launch_site.site_name_long,
      launch_success: this.props.flight.launch_success,
      mission_name: this.props.flight.mission_name,
      rocket_name: this.props.flight.rocket.rocket_name,
      image_count: this.props.flight.links.flickr_images.length,
      payload: this.props.flight.rocket.second_stage.payloads[0].payload_mass_kg
    });
  }

  componentDidMount() {
    this.updateState();
  }

  render() {
    return (
      <div className="flight__teaser mb-2">
        <div className="row">
          <div className="col-md-12 col-sm-12 mb-2">
            <span className="badge badge-pill badge-secondary">
              Launch: {this.state.launch_number} - {this.state.mission_name}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 text-center">
            <img
              alt={this.state.mission_name}
              className="flight__badge mt-1"
              src={this.state.mission_patch}
            />
          </div>
          <div className="col-md-8 col-sm-12 mb-2 details__margin">
            <ul>
              <li>
                <strong>Lauched:</strong>{" "}
                <Moment parse="YYYY-MM-DD HH:mm" className="text-primary">
                  {this.state.launch_date_local}
                </Moment>
              </li>
              <li>
                <strong>Launch location:</strong> {this.state.launch_site_name}
              </li>
              <li>
                <strong>Payload mass: </strong>
                {this.state.payload
                  ? this.state.payload
                  : "secret information..."}{" "}
                kg
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-1 text-center">
            <Link
              type="btn"
              className="btn btn-secondary btn-sm"
              to={`/launch/${this.state.launch_number}`}
            >
              Mission details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
