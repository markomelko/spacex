import React, { Component } from "react";
import { Link } from "react-router-dom";

import Moment from "react-moment";

import "./pastflight.css";

export default class pastflight extends Component {
  state = {
    launchDetails: "",
    rocketDetails: "",
    current: "",
    last: false
  };

  getCorrectRocket(rocket_id) {
    const allRockets = JSON.parse(sessionStorage.getItem("spacex-rockets"));

    function findRocket(rocket) {
      return rocket.rocket_id === rocket_id;
    }
    return allRockets.find(findRocket);
  }

  componentDidMount() {
    const pastFlights = JSON.parse(
      sessionStorage.getItem("spacex-pastflights")
    );

    let wantedLaunch = null;
    let rocketData = null;
    let wantedLaunchNro = 1;
    let lastLaunch = true;

    if (parseInt(this.props.match.params.id) === pastFlights.length) {
      lastLaunch = false;
      wantedLaunchNro = pastFlights.length;

      wantedLaunch = pastFlights[this.props.match.params.id - 1];

      rocketData = this.getCorrectRocket(wantedLaunch.rocket.rocket_id);
    } else if (this.props.match.params.id > pastFlights.length) {
      wantedLaunchNro = pastFlights.length;

      wantedLaunch = pastFlights[pastFlights.length - 1];

      rocketData = this.getCorrectRocket(wantedLaunch.rocket.rocket_id);
    } else if (
      this.props.match.params.id === "1" ||
      this.props.match.params.id === "0"
    ) {
      wantedLaunch = pastFlights[0];
      rocketData = this.getCorrectRocket(wantedLaunch.rocket.rocket_id);
    } else {
      // most common case here
      wantedLaunchNro = this.props.match.params.id;

      wantedLaunch = pastFlights[wantedLaunchNro - 1];
      rocketData = this.getCorrectRocket(wantedLaunch.rocket.rocket_id);
    }

    this.setState({
      launchDetails: wantedLaunch,
      rocketDetails: rocketData,
      current: wantedLaunchNro,
      last: lastLaunch
    });

    window.scrollTo(0, 0);
  }

  render() {
    if (!this.state.launchDetails) return <p>Waiting params...</p>;
    else {
      let images = "";
      let rocketImages = "";

      let current_launch_nro = this.state.current;

      if (this.state.launchDetails.links.flickr_images) {
        images = this.state.launchDetails.links.flickr_images.map(image => {
          return (
            <img
              key={image}
              alt={this.state.launchDetails.mission_name}
              src={image}
              className="flight_image"
            />
          );
        });
      }

      if (this.state.rocketDetails.flickr_images) {
        rocketImages = this.state.rocketDetails.flickr_images.map(image => {
          return (
            <img
              key={image}
              alt={this.state.rocketDetails.description}
              src={image}
              className="flight_image"
            />
          );
        });
      }

      return (
        <div className="container">
          <div className="row launch__navigation mb-2">
            <div className="col-md-12 col-sm-12 text-left">
              <Link
                type="btn"
                className="btn btn-secondary btn-sm navigation__buttons"
                to="/"
              >
                Home
              </Link>

              <a
                className="btn btn-dark btn-sm navigation__buttons"
                href={`/launch/${parseInt(current_launch_nro) - 1}`}
              >
                Previous{" "}
                <span className="badge badge-secondary">
                  {parseInt(current_launch_nro) - 1}
                </span>
              </a>
              {this.state.last ? (
                <a
                  className="btn btn-info btn-sm navigation__buttons"
                  href={`/launch/${parseInt(current_launch_nro) + 1}`}
                >
                  Next{" "}
                  <span className="badge badge-secondary">
                    {parseInt(current_launch_nro) + 1}
                  </span>{" "}
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-left mb-3">
              <ul className="mission__details">
                <li>
                  <h5>
                    Mission{" "}
                    <span className="text-primary">
                      {parseInt(current_launch_nro)}
                    </span>{" "}
                    - {this.state.launchDetails.mission_name}
                  </h5>
                </li>

                <li>
                  <h6>
                    Launch date:{" "}
                    <Moment parse="YYYY-MM-DD HH:mm">
                      {this.state.launchDetails.launch_date_local}
                    </Moment>
                  </h6>
                </li>
                <li>
                  <h6>Rocket: {this.state.rocketDetails.rocket_name}</h6>
                </li>
                <li>
                  <h6>
                    Payload weight:{" "}
                    {this.state.launchDetails.rocket.second_stage.payloads[0]
                      .payload_mass_kg
                      ? this.state.launchDetails.rocket.second_stage.payloads[0]
                          .payload_mass_kg
                      : "secret information..."}{" "}
                    kg
                  </h6>
                </li>
                <li>
                  <strong>Mission description:</strong>{" "}
                  {this.state.launchDetails.details}
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center mb-3">
              <img
                alt={this.state.launchDetails.mission_name}
                className="mission_badge mt-1"
                src={this.state.launchDetails.links.mission_patch}
              />
            </div>
          </div>

          <div className="row info__card">
            <div className="col-md-12 text-left" />
            <div className="col-md-12 text-center"> {images} </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>
                  <h5>Rocket: {this.state.rocketDetails.rocket_name} </h5>
                </li>
                <li>
                  <h6>
                    <strong>Rocket first flight:</strong>{" "}
                    <Moment format="M.D.YYYY">
                      {this.state.rocketDetails.first_flight}
                    </Moment>
                  </h6>
                </li>
                <li>
                  <h6>
                    <strong>Mass:</strong> {this.state.rocketDetails.mass.kg} Kg
                  </h6>
                </li>
                <li>
                  <h6>
                    <strong>Height:</strong>{" "}
                    {this.state.rocketDetails.height.meters} meters
                  </h6>
                </li>
                <li>
                  <h6>
                    <strong>One launch costs: </strong>{" "}
                    {this.state.rocketDetails.cost_per_launch} $
                  </h6>
                </li>
                <li>
                  <h6>
                    <strong>First stage fuel:</strong>{" "}
                    {this.state.rocketDetails.first_stage.fuel_amount_tons} tons
                  </h6>
                </li>
                <li>
                  <h6>
                    <strong>Second stage fuel:</strong>{" "}
                    {this.state.rocketDetails.second_stage.fuel_amount_tons}{" "}
                    tons
                  </h6>
                </li>
                <li>
                  <strong>Rocket details:</strong>{" "}
                  {this.state.rocketDetails.description}{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-6" />

            <div className="col-md-12 text-center">{rocketImages}</div>
          </div>
        </div>
      );
    }
  }
}
