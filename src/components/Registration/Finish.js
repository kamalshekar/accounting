import React, { Component } from "react";
import atlogo from "../../Images/at.png";
import { ProductConsumer } from "../../contextAPI/Context";
import { Result, Button } from "antd";
export default class Finish extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { success } = value;
          return (
            <div className="pl-5 pr-5">
              <div className="">
                <img
                  src={atlogo}
                  className="mt-3 mb-5 img-fluid"
                  style={{ width: "20rem" }}
                ></img>
              </div>
              {success ? (
                <div>
                  <p className="login-style mb-4 ">
                    <Result status="success" />
                    Successfully registered!
                  </p>
                  <p className="para-style mb-4 ">
                    You can login using these credentials in AccountingTool!
                  </p>
                </div>
              ) : (
                <div>
                  <Result status="error" />
                  <p className="login-style mb-4 ">
                    <span style={{ color: "red" }}>Ooops!!!</span> Submission
                    Failed
                  </p>
                  <p className="para-style mb-4">
                    Please check and modify the following information before
                    resubmitting.
                  </p>
                </div>
              )}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
