import React, { Component } from "react";
import { ProductConsumer } from "../../../contextAPI/Context";
import { Drawer, Button } from "antd";
import "./navdrawer.css";
import "antd/dist/antd.css";
import { Input } from "antd";
import arrow from "../../../Images/drawer/back.svg";

export default class NavDrawer extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            GxRegistrationopen,
            GxRegistrationDrawer,
            GxRegistrationclose,
            GxRegCreatePassword,
            GxRegUserName,
            GxRegConfirmPassword,
            GxRegAPIpage,
            GxRegOtp,
            GxRegAPIpageTwo,
            GxRegCreatePasswordFun,
            GxRegConfirmPasswordFun,
            GxRegAPIpageFun,
            GxRegOtpFun,
            GxRegAPIpageTwoFun,
            GxRegUserNameFun
          } = value;

          return (
            <>
              <span onClick={GxRegistrationopen}>Continue</span>
              <Drawer
                className="antDrawerheight gxCheckdrawer"
                width={642}
                placement="right"
                closable={false}
                visible={GxRegistrationDrawer}
                style={{
                  zIndex: "2",
                  marginTop: "4rem"
                }}
              >
                {/* ----------------------------GX registration UserName Section Start -------------------------- */}
                {GxRegUserName ? (
                  <div className="gxCheckCenter">
                    <div className="container-fluid  p-0">
                      <div className="pl-5 pr-5 containerAnimation">
                        <div className="gxCheckhead">New *Enter User Type*</div>
                        <div className="gxChecksub">
                          Step 2: GX Registration
                        </div>
                        <div className="mt-5 emailContainer">
                          <p className="emailHead">Assign Username</p>
                          <Input
                            placeholder="Ex.shorupan"
                            className="inputStyle"
                          />
                        </div>
                      </div>
                      <div>
                        <img
                          onClick={GxRegistrationclose}
                          src={arrow}
                          className="img-fluid gxCheckback"
                        />
                        <button
                          onClick={GxRegCreatePasswordFun}
                          className="btn accountBtn "
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* ----------------------------GX registration UserName Section End -------------------------- */}

                {/* ----------------------------GX registration Password Section Start -------------------------- */}
                {GxRegCreatePassword ? (
                  <div className="gxCheckCenter">
                    <div className="container-fluid  p-0">
                      <div className="pl-5 pr-5 containerAnimation">
                        <div className="gxCheckhead">New *Enter User Type*</div>
                        <div className="gxChecksub">
                          Step 2: GX Registration
                        </div>
                        <div className="mt-5 emailContainer">
                          <p className="emailHead">Create Password</p>
                          <Input
                            placeholder="Ex.shorupan"
                            className="inputStyle"
                          />
                        </div>
                      </div>
                      <div>
                        <img
                          onClick={GxRegUserNameFun}
                          src={arrow}
                          className="img-fluid gxCheckback"
                        />
                        <button
                          onClick={GxRegConfirmPasswordFun}
                          className="btn accountBtn "
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* ----------------------------GX registration Paswword Section End -------------------------- */}

                {/* -------------------------GX registration Confirm Password Section Start ------------------- */}
                {GxRegConfirmPassword ? (
                  <div className="gxCheckCenter">
                    <div className="container-fluid  p-0">
                      <div className="pl-5 pr-5 containerAnimation">
                        <div className="gxCheckhead">New *Enter User Type*</div>
                        <div className="gxChecksub">
                          Step 2: GX Registration
                        </div>
                        <div className="mt-5 emailContainer">
                          <p className="emailHead">Confirm Password</p>
                          <Input
                            placeholder="Ex.shorupan"
                            className="inputStyle"
                          />
                        </div>
                      </div>
                      <div>
                        <img
                          onClick={GxRegCreatePasswordFun}
                          src={arrow}
                          className="img-fluid gxCheckback"
                        />
                        <button
                          onClick={GxRegAPIpageFun}
                          className="btn accountBtn "
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* -------------------------GX registration Confirm Password Section End ------------------- */}

                {/* -------------------------GX registration APIpage Start ------------------- */}
                {GxRegAPIpage ? (
                  <div className="gxCheckCenter">
                    <div className="container-fluid  p-0">
                      <div className="pl-5 pr-5 containerAnimation">
                        <div className="gxCheckhead">First API Call</div>
                        <div className="gxCheckhead">Lottie Animation</div>
                      </div>
                      <div>
                        <img
                          onClick={GxRegCreatePasswordFun}
                          src={arrow}
                          className="img-fluid gxCheckback"
                        />
                        <button
                          className="btn accountBtn "
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* -------------------------GX registration APIpage Start ------------------- */}
              </Drawer>
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}
