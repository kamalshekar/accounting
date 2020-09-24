import React, { Component } from 'react'
import NavbarMain from "../navbar/NavbarMain"
import Calculator from "./Calculator"
export default class CalculatorWrap extends Component {
  render() {
    return (
      <div>
        <NavbarMain children={<Calculator />} />
      </div>
    );
  }
}
