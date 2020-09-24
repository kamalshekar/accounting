import React, { Component } from 'react'
import NavbarMain from "../../navbar/NavbarMain";
import Traction from "./Traction"

export default class TractionWrap extends Component {
  render() {
    return (
      <div>
        <NavbarMain children={<Traction />} />
      </div>
    );
  }
}
