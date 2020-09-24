import React, { Component } from "react";
import NavbarMain from "../navbar/NavbarMain";
import CalculatorLiabilities from "./CalculatorLiabilities";
export default class CalculatorLiabilitiesWrap extends Component {
  render() {
    return (
      <div>
        <NavbarMain children={<CalculatorLiabilities />} />
      </div>
    );
  }
}
