import React from "react";
import Moment from "react-moment";

import "./nextLaunchteaser.css";

export default function nextlaunchteaser(props) {
  return (
    <div>
      <div className="nextlaunch_teaser_container mb-2 text-left">
        <div className="row">
          <div className="col-md-12 mb-1">
            <span className="badge badge-pill badge-warning">
              Launch: {props.data.flight_number} - {props.data.mission_name}
            </span>
          </div>
          <div className="col-md-12">
            <ul>
              <li>
                <strong>Launch date: </strong>
                <Moment parse="YYYY-MM-DD HH:mm" className="text-primary">
                  {props.data.launch_date_local}
                </Moment>
              </li>
              <li>
                <strong>Launch location:</strong>{" "}
                {props.data.launch_site.site_name}
              </li>

              <li>
                <strong>Payload type:</strong>{" "}
                {props.data.rocket.second_stage.payloads[0].payload_type}
              </li>

              <li>
                <strong>Payload mass (Kg):</strong>{" "}
                {props.data.rocket.second_stage.payloads[0].payload_mass_kg
                  ? props.data.rocket.second_stage.payloads[0].payload_mass_kg
                  : "Secret..."}
              </li>

              <li>
                <strong>Used rocket:</strong> {props.data.rocket.rocket_name}
              </li>
            </ul>
            <ul>
              <li>
                <strong>Mission description: </strong>{" "}
                {props.data.details ? (
                  props.data.details
                ) : (
                  <span className="text-primary">Secret...</span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
