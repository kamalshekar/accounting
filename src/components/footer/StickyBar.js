import React, { Component } from "react";
import "./Stickybar.css";
import { ProductConsumer } from "../../contextAPI/Context";
import { Button } from "@material-ui/core";
import us from "../../Images/us.png";
import Drawer from "@material-ui/core/Drawer";
import gx from "../../Images/gxblue.png";

const drawerWidth = 10;

export default class StickyBar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            marketvalue,
            costbasis,
            netfiat,
            pastday,
            switchcolor,
            currencydrawer,
            toggleDrawerCurrency
          } = value;
          return (
            <div>
              <div className="sticky-bar">
                <div className="stickyFlex">
                  <div className="itemCenter" style={{ paddingLeft: "112px" }}>
                    <div>
                      <span style={{ color: switchcolor ? "black" : "green" }}>
                        <span className="valueFont">${marketvalue}.00</span>
                      </span>
                      <br></br>
                      <span className="boxFont">Current Portfolio Value</span>
                    </div>
                  </div>
                  <div className="each-box-left itemCenter">
                    <div className="pl-5">
                      <span style={{ color: switchcolor ? "black" : "green" }}>
                        <span className="valueFont">${marketvalue}.00</span>
                      </span>
                      <br></br>
                      <span className="boxFont">Current Portfolio Value</span>
                    </div>
                  </div>
                  <div className=" d-flex each-box-left itemCenter">
                    <div className="pl-5">
                      <span style={{ color: switchcolor ? "black" : "green" }}>
                        <span className="valueFont">${marketvalue}.00</span>
                      </span>
                      <br></br>
                      <span className="boxFont">Current Portfolio Value</span>
                    </div>
                  </div>
                  <div
                    className="itemCenter"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <div className="pr-5">
                      <span style={{ color: switchcolor ? "black" : "green" }}>
                        <span className="valueFont">${marketvalue}.00</span>
                      </span>
                      <br></br>
                      <span className="boxFont">Return On Equity</span>
                    </div>
                  </div>
                </div>
                <div className="each-Cur-left itemCenterOne">
                  <span className="text-center" style={{ width: "100%" }}>
                    <div>
                      <Button
                        className="task-drp-btn"
                        onClick={toggleDrawerCurrency("currencydrawer", true)}
                        style={{
                          cursor: "pointer",
                          padding: "0"
                        }}
                      >
                        <img src={gx} style={{ width: "2.6rem" }} />
                      </Button>
                    </div>

                    <Drawer
                      className="crt-site currencyWidth"
                      anchor="right"
                      width={drawerWidth}
                      open={currencydrawer}
                      onClose={toggleDrawerCurrency("currencydrawer", false)}
                    >
                      <div>
                        <h6 className="wr-are-u-from">Select Your Currency?</h6>
                        <div className="mt-5 text-center">
                          <Button
                            className=""
                            onClick={toggleDrawerCurrency(
                              "currencydrawer",
                              false
                            )}
                            style={{ cursor: "pointer", width: "100%" }}
                          >
                            <img src={gx} style={{ width: "2.3rem" }} />
                          </Button>
                          <Button
                            className="mt-5"
                            style={{ cursor: "pointer", width: "100%" }}
                            onClick={toggleDrawerCurrency(
                              "currencydrawer",
                              false
                            )}
                          >
                            <img src={gx} style={{ width: "2.3rem" }} />
                          </Button>
                          <Button
                            className="mt-5"
                            style={{ cursor: "pointer", width: "100%" }}
                            onClick={toggleDrawerCurrency(
                              "currencydrawer",
                              false
                            )}
                          >
                            <img src={gx} style={{ width: "2.3rem" }} />
                          </Button>
                          <Button
                            className="mt-5"
                            style={{ cursor: "pointer", width: "100%" }}
                            onClick={toggleDrawerCurrency(
                              "currencydrawer",
                              false
                            )}
                          >
                            <img src={gx} style={{ width: "2.3rem" }} />
                          </Button>
                          <Button
                            className="mt-5"
                            style={{ cursor: "pointer", width: "100%" }}
                            onClick={toggleDrawerCurrency(
                              "currencydrawer",
                              false
                            )}
                          >
                            <img src={gx} style={{ width: "2.3rem" }} />
                          </Button>
                        </div>
                      </div>
                    </Drawer>
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
