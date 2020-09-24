import React, { Component } from "react";
import "./user.css";
import UserLeft from "./UserLeft";
import UserRight from "./UserRight";

export default class Traction extends Component {
  render() {
    return (
      <div className="fitScreen" style={{}}>
        <div className="row">
          <div className="col-md-3 rightBorder">
            <UserLeft />
          </div>
          <div className="col-md-9" style={{ paddingLeft: "30px" }}>
            <UserRight />
          </div>
        </div>
      </div>
    );
  }
}
