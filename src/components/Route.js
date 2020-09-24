import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProductConsumer } from "../contextAPI/Context";
import AccountingHome from "../components/Registration/AccountingHome";
import Login from "../components/Registration/Login";
import Signup from "../components/Registration/Signup";
import StickyBar from "./footer/StickyBar";
import Register from "../components/Registration/Register";
import Profile from "./user/ProfileWrap";
import Traction from "./main/traction/TractionWrap";
import User from "./main/traction/User/UserWrap";
import LiquidityReport from "./calculator/LiquidityReportWrap";
import Training from "./Management/TrainingWrap";
import At from "./Apps/AtWrap";

import Calculator from "../components/calculator/CalculatorAssetsWrap"
import Calculator1 from "../components/calculator/CalculatorLiabilitiesWrap";


export default class Routea extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { exlistdetail } = value;
          return (
            <div>
              <Router>
                <Route path="/" exact component={AccountingHome} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Signup" exact component={Signup} />
                <Route path="/StickyBar" exact component={StickyBar} />
                <Route path="/Register" exact component={Register} />
                <Route path="/Profile" exact component={Profile} />
                <Route path="/traction" exact component={Traction} />
                <Route path="/traction/user" exact component={User} />
                <Route path="/calculator" exact component={Calculator} />
                <Route path="/calculator1" exact component={Calculator1} />

                <Route
                  path="/liquidityreport"
                  exact
                  component={LiquidityReport}
                />
                <Route path="/training" exact component={Training} />
                <Route path="/at" exact component={At} />
              </Router>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
