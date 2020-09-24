import React from "react";
import "antd/dist/antd.css";
import "./user.css";
import { ProductConsumer } from "../../../../contextAPI/Context";

import { Menu, Dropdown, Button, message } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import { Slider } from "antd";
import { Radio } from "antd";

export default function UserLeft() {
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        User
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Business
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        Accountant
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        Accountanting Firm
      </Menu.Item>
      <Menu.Item key="5" icon={<UserOutlined />}>
        Tax Department
      </Menu.Item>
      <Menu.Item key="6" icon={<UserOutlined />}>
        Admin
      </Menu.Item>
      <Menu.Item key="7" icon={<UserOutlined />}>
        Support Agent
      </Menu.Item>
      <Menu.Item key="8" icon={<UserOutlined />}>
        Super Admin
      </Menu.Item>
    </Menu>
  );

  return (
    <ProductConsumer>
      {value => {
        const { onChangeRadio, radiocheck } = value;
        return (
          <div>
            <div>
              <p className="headStyle mb-3">COUNTRY</p>
              <Dropdown overlay={menu}>
                <Button>
                  User Types <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div>
              <p className="headStyle mt-5 mb-3">CHECKBOX</p>
              <Checkbox onChange={onChange}>is right here</Checkbox>
            </div>
            <div>
              <p className="headStyle mt-5 mb-3">PRICE IN $USD</p>
              <div className="tipStyle">
                <span>$0.00</span>
                <span>$1000.00</span>
              </div>
              <Slider range max={1000} defaultValue={[0, 1000]} />
            </div>
            <div>
              <p className="headStyle mt-5 mb-3">OPTION</p>

              <Radio.Group onChange={onChangeRadio} value={radiocheck}>
                <Radio value={1} className="mb-2">
                  Option One
                </Radio>
                <br></br>
                <Radio value={2}>Option Two</Radio>
              </Radio.Group>
              <div className="tipStyle mt-3">
                <span>1</span>
                <span>50</span>
              </div>
              <Slider range max={50} defaultValue={[1, 50]} />
            </div>
            <div>
              <p className="headStyle mt-5 mb-3">OPTION</p>
              <div className="tipStyle mt-3">
                <span>1MB</span>
                <span>50MB</span>
              </div>
              <Slider range max={50} defaultValue={[1, 50]} />
            </div>
            <div>
              <p className="headStyle mt-5 mb-3">ADDITIONAL</p>
              <div style={{ display: "inline-grid" }} className="check">
                <Checkbox className="mb-2" onChange={onChange}>
                  Option Three
                </Checkbox>
                <Checkbox className="mb-2" onChange={onChange}>
                  Option Four
                </Checkbox>
                <Checkbox className="mb-2" onChange={onChange}>
                  Option Five
                </Checkbox>
                <Checkbox onChange={onChange}>Option Six</Checkbox>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
