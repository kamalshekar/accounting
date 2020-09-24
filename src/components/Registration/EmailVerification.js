import React, { Component } from "react";
import atlogo from "../../Images/at.png";
import OtpInput from "react-otp-input";
import { ProductConsumer } from "../../contextAPI/Context";

export default class EmailVerification extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { typeotp, typeotpfunction, toSuccess } = value;
          return (
            <div className="pl-5 pr-5">
              <p className="login-style-confirm mb-4">Confirm Your Email</p>
              <p className="para-style mb-4">We Sent Your Security Code To</p>
              <div className="otp">
                <OtpInput
                  value={typeotp}
                  onChange={typeotpfunction}
                  numInputs={6}
                  separator={<span>-</span>}
                />
              </div>
              <p className="para-style mt-3">
                Didn't Get The Email? <a href="#"> Resend Email.</a>
              </p>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
