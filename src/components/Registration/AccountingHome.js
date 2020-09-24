import React, { Component } from "react";
import "./register.css";
import atlogo from "../../Images/at.png";
import { Link } from "react-router-dom";
import GxNvest from "../../Images/gxblue.png";
import Atlogo from "../../Images/AtAdmin.svg";

export default class AccountingHome extends Component {
  render() {
    return (
      <>
        <div className="login-ag">
          <div>
            <img src={Atlogo} style={{ width: "18rem" }} alt="no_img" />
            <span className="controlPanel">Control Panel</span>
            <Link to="/login" className="login-btn-ag">
              Access Panel
            </Link>
            <Link to="/" className="get-srt-btn">
             Request Access
            </Link>
            <div className="pow-by">
              <h5 style={{ color: "#186ab4" }}>P O W E R E D B Y</h5>
              <img src={GxNvest} alt="no_img" style={{ width: "24px" }} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
