import React, { Component } from "react";
import NavbarMain from "../navbar/NavbarMain";
import At from "./AT";
export default class AtWrap extends Component {
  render() {
    return (
      <div>
        <NavbarMain children={<At />} />
      </div>
    );
  }
}
