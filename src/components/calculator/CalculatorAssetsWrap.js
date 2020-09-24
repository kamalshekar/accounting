import React, { Component } from "react";
import NavbarMain from "../navbar/NavbarMain";
import CalculatorAssets from "./CalculatorAssets";
export default class CalculatorAssetsWrap extends Component {
  render() {
    return (
      <div>
        <NavbarMain children={<CalculatorAssets />} />
      </div>
    );
  }
}
