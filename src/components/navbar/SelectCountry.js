import React, { Component } from "react";
import { ProductConsumer } from "../../contextAPI/Context";
import { Drawer } from "@material-ui/core";
import "./navbar.css";
export default function TemporaryDrawer() {
  const fullList = side => (
    <ProductConsumer>
      {value => {
        const { flagcountry, settingCountryFlag, toggleDrawer } = value;

        return (
          <div
            className=""
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
          >
            <div
              style={{
                textAlign: "right",
                width: "100%",
                margin: "1rem 3rem 0 0"
              }}
            >
              <i
                className="fas fa-times"
                style={{ color: "#000", cursor: "pointer" }}
              ></i>
            </div>
            <div className="">
              <h6 className="wr-are-u-from">Where Are You From?</h6>
              <div className="justify-content-center align-items-center flex-wrap pb-5">
                {flagcountry.map(country => {
                  return (
                    <div
                      className="country-f-n d-flex align-items-center justify-content-center"
                      onClick={() => settingCountryFlag(country)}
                    >
                      <img
                        style={{ width: "2.3rem" }}
                        src={country.formData.Flag}
                        alt="no_img"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
  return (
    <ProductConsumer>
      {value => {
        const { selectflag, toggleDrawer, right } = value;

        return (
          <div className="flagCenter">
            <div
              onClick={toggleDrawer("right", true)}
              style={{ cursor: "pointer" }}
            >
              <img src={selectflag} style={{ width: "2.3rem" }} alt="no_img" />{" "}
            </div>
            <Drawer
              className="currencyWidth"
              anchor="right"
              open={right}
              onClose={toggleDrawer("right", false)}
            >
              {fullList("right")}
            </Drawer>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
