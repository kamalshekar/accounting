import React, { Component } from "react";
import { ProductConsumer } from "../../../contextAPI/Context";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

class Traction extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const { subToggleMain } = value;
          return (
            <div className="submenuTabsMaster" style={{ paddingTop: "4rem" }}>
              {subToggleMain === "Sub Menu 1" ? (
                <Tabs
                  className="submenuTabs"
                  defaultActiveKey="1"
                  onChange={callback}
                >
                  <TabPane className="TabBgClr" tab={subToggleMain} key="1">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane className="TabBgClr" tab={subToggleMain} key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane className="TabBgClr" tab={subToggleMain} key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              ) : null}
              {subToggleMain === "Sub Menu 2" ? (
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane className="TabBgClr" tab={subToggleMain} key="1">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane className="TabBgClr" tab={subToggleMain} key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane className="TabBgClr" tab={subToggleMain} key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              ) : null}
              {subToggleMain === "Sub Menu 3" ? (
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane className="TabBgClr" tab={subToggleMain} key="1">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane className="TabBgClr" tab={subToggleMain} key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane className="TabBgClr" tab={subToggleMain} key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              ) : null}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Traction;
