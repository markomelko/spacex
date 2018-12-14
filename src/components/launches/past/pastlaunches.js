import React, { Component } from "react";

import PastFlightTeaser from "./single/pastflightteaser";

import { SHOWN_PAST_LAUNCHES } from "../../../utils/app-config";

export class pastflights extends Component {
  state = {
    pastFlights: ""
  };

  createList(originalList) {
    return new Promise((resolve, reject) => {
      const lenght = originalList.length - 1;
      const newList = [];
      const wantedCount = SHOWN_PAST_LAUNCHES;
      for (let a = 0; a <= wantedCount; a++) {
        newList.push(originalList[lenght - a]);
        if (a === wantedCount) resolve(newList);
      }
    });
  }

  componentDidMount() {
    const pastFlights = JSON.parse(
      sessionStorage.getItem("spacex-pastflights")
    );

    this.createList(pastFlights).then(data => {
      this.setState({ pastFlights: data });
    });
  }

  render() {
    let pastFlightTeaserList = <p>Micro spinner here :)...</p>;
    if (this.state.pastFlights) {
      pastFlightTeaserList = this.state.pastFlights.map((flight, index) => {
        return <PastFlightTeaser key={index} flight={flight} />;
      });
    }

    return (
      <div>
        <div className="row">
          <div className="col">
            <h4>30 past launch</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">{pastFlightTeaserList} </div>
        </div>
      </div>
    );
  }
}

export default pastflights;
