import React, { Component } from "react";
import "./heading.css";

export default class heading extends Component {
  state = {
    spacexInformation: ""
  };

  componentDidMount() {
    const sessionData = sessionStorage.getItem("spacex-infomation");
    const headingData = JSON.parse(sessionData);
    this.setState({ spacexInformation: headingData });
    // console.log(headingData);
  }
  render() {
    let pageInfo = <p>Loading...</p>;

    if (this.state.spacexInformation) {
      pageInfo = this.state.spacexInformation;

      return (
        <div className="row heading">
          <div className="col-md-12 text-left">
            <img alt="Space X logo" className="heading-image" />
          </div>
          <div className="col-md-6 text-left">
            <div className="row">
              <div className="col mb-3">
                <strong>...</strong> {pageInfo.summary}{" "}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  <a href={pageInfo.links.website}>Space X homepage</a>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>Version 0.1 - 18.12.2018 Marko Melko</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-left">
            <ul>
              <li>
                <strong>Name: </strong>
                {pageInfo.name}
              </li>
              <li>
                <strong>Founded: </strong>
                {pageInfo.founded}
              </li>
              <li>
                <strong>Employees: </strong>
                <span className="text-success">{pageInfo.employees}</span>
              </li>
              <li>
                <strong>CEO: </strong>
                {pageInfo.ceo}
              </li>
              <li>
                <strong>Company valuation: </strong>
                <span className="text-success">{pageInfo.valuation} $ </span>
              </li>
              <li>
                <strong>Elon's Twitter: </strong>
                <a href={pageInfo.links.elon_twitter}>
                  {pageInfo.links.elon_twitter}
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return <div className="heading">{pageInfo}</div>;
  }
}
