import React, { Component } from "react";

export default class chart1 extends Component {
  componentDidMount() {
    console.log("Chart 1 did mount");
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <span className="badge badge-light btn-block text-left">
              Lauches per year chart
            </span>
          </div>
        </div>
      </div>
    );
  }
}
