import React, { Component } from "react";
import NavbarMain from "../navbar/NavbarMain";
import Training from "./Training";
export default class TrainingWrap extends Component {
  render() {
    return (
      <div>
        <NavbarMain children={<Training />} />
      </div>
    );
  }
}
