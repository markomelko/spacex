import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getAppData } from "../utils/utils";

import SpaceX from "./Spacex";
import Pastflight from "../components/launches/past/single/pastflight";
import Spinner from "../components/spinner/spinner";

export default class SpaceXroot extends Component {
  state = {
    siteDataReady: false
  };

  componentDidMount() {
    getAppData().then(response => {
      this.setState({ siteDataReady: true });
    });
  }

  render() {
    if (!this.state.siteDataReady) {
      return <Spinner />;
    } else {
      return (
        <div>
          <Route path="/" exact component={SpaceX} />
          <Route path="/launch/:id" exact component={Pastflight} />
        </div>
      );
    }
  }
}
