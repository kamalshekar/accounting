import React, { Component } from "react";
import "./login.css";
import BetsLogo from "../../Images/AtAdmin.svg";
import { ProductConsumer } from "../../contextAPI/Context";

export default class Login extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            logemail,
            logpassword,
            inputChange,
            loginVerify,
            loader
          } = value;
          const loginEnabled = logpassword.length > 2 && logemail.length > 4;
          return (
            <>
              <div className="login-ag">
                <div>
                  <img src={BetsLogo} style={{ width: "18rem" }} alt="no_img" />
                  <form className="w-100 mt-5">
                    <div className="form-group">
                      <input
                        onChange={inputChange}
                        type="email"
                        name="logemail"
                        className="login-in-mail"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={inputChange}
                        type="password"
                        className="login-in-pass"
                        placeholder="Password"
                        name="logpassword"
                      />
                    </div>
                  </form>
                  <button
                    disabled={!loginEnabled}
                    type="submit"
                    className="btn login-in-login"
                    onClick={loginVerify}
                  >
                    Login
                  </button>
                </div>
              </div>
              {loader ? (
                <div className="verifying">
                  <h3>VERIFYING</h3>
                  <div className="myProgressfull">
                    <div className="myBarfull"></div>
                  </div>
                </div>
              ) : null}
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}
