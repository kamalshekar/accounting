import React from "react";
import "antd/dist/antd.css";
import "./user.css";
import { ProductConsumer } from "../../../../contextAPI/Context";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function UserRight() {
  function handleMenuClick(e) {
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );
  const tractionCard = (
    <div className="row bTop">
      <div className="col-md-3 bRight">
        <p className="tractionCardhead">AAAA-AA</p>
        <div className="d-flex mt-5">
          <p className="tractionCardbtn mr-3">OPT</p>
          <p className="tractionCardbtn">OPT</p>
        </div>
      </div>
      <div className="col-md-3 bRight">
        <p className="tractionCardhead">SPECS</p>
        <div className="tractioncardContent">
          <p>
            <span style={{ fontWeight: "700" }}>ONE:</span> Excepteur sint
            occaecat cupidatat non proident.
          </p>
          <p>
            <span style={{ fontWeight: "700" }}>TWO:</span> Lorem ipsum dolor
          </p>
          <p>
            <span style={{ fontWeight: "700" }}>THREE:</span> Sed quia nonp
          </p>
        </div>
      </div>
      <div className="col-md-3 bRight">
        <span className="tipStyle mt-4">Speed</span>
        <p className="tractioncardPrice">$100</p>
      </div>
      <div className="col-md-3 bRight">
        <div className="d-flex" style={{ alignItems: "center" }}>
          <div>
            <span className="tipStyle mt-4">FROM</span>
            <p style={{ fontSize: "26px", fontWeight: "700" }}>$19.99</p>
            <span className="tipStyle">PER MONTH</span>
          </div>
          <div>
            <Button type="primary ml-5">EDIT</Button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <ProductConsumer>
      {value => {
        const {} = value;
        return (
          <div>
            <div
              className="d-flex mb-5"
              style={{ justifyContent: "space-between" }}
            >
              <Button>Add Product</Button>
              <div className="d-flex">
                <span className="tipStyle mr-3">Sort By</span>
                <Dropdown overlay={menu}>
                  <Button>
                    Price <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
            <div className="leftScroll">
              {tractionCard}
              {tractionCard}
              {tractionCard}
              {tractionCard}
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
