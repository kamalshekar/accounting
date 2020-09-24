import React, { Component } from "react";
import NavbarMain from "../navbar/NavbarMain";
import Profile from "./Profile";

export default class Dashboardwrap extends Component {
  render() {
    return (
      <div>
        <NavbarMain children={<Profile />} />
      </div>
    );
  }
}
