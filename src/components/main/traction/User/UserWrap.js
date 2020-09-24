import React, { Component } from "react";
import NavbarMain from "../../../navbar/NavbarMain";
import User from "./User";

export default class TractionWrap extends Component {
  render() {
    return (
      <div>
        <NavbarMain children={<User />} />
      </div>
    );
  }
}
