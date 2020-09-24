import React from "react";
import Button from "@material-ui/core/Button";
import "./navbar.css";
import { Input } from "antd";
import { ProductConsumer } from "../../contextAPI/Context";

export default function SimpleMenu() {
  return (
    <>
      <ProductConsumer>
        {value => {
          const {
            myaccwallet,
            myAccount,
            accountdp,
            accountname,
            accountamount,
            searchAccount,
            searchedR
          } = value;
          return (
            <div className="myAccountMaster">
              <Button
                className="myacc"
                aria-controls="simple-menu"
                aria-haspopup="true"
                style={{
                  color: "#3b4859 ",
                  width: "35rem",
                  fontWeight: "700",
                  fontSize: "17px"
                }}
              >
                <div className="myaccountWidth">
                  <div style={{ width: "100%" }}>
                    <img
                      src={accountdp}
                      className="img-fluid accountprofile mr-5"
                    />
                    <span>{accountname}</span>
                  </div>

                  <div
                    style={{ width: "100%", textAlign: "end" }}
                    className="mr-4"
                  >
                    <span className="" style={{ color: "#186ab4" }}>
                      {accountamount}
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          );
        }}
      </ProductConsumer>
    </>
  );
}
