import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import SpaceXroot from "./container/SpaceXroot";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SpaceXroot />
      </BrowserRouter>
    );
  }
}

export default App;
