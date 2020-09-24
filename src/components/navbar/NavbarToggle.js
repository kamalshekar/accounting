import React, { Component } from "react";
import { ProductConsumer } from "../../contextAPI/Context";
import { Dropdown } from "react-bootstrap";

class NavbarToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            traction,
            subToggleMainOne,
            subToggleMainTwo,
            subToggleMainThree,
            subToggleMgmtOne,
            subToggleMgmtTwo,
            subToggleMgmtThree,
            subToggleAppsThree,
            subToggleAppsTwo,
            subToggleAppsOne
          } = value;
          return (
            <div>
              {traction === "Traction" ? (
                <div className="d-flex">
                  <span
                    className="pr-5"
                    style={{
                      color: "#186ab4",
                      fontSize: "24px",
                      fontWeight: "700"
                    }}
                  >
                    {traction}
                  </span>
                  <div className="traction">
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="toggleBtn app-add-drp-btn"
                      >
                        TRACTION
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="navToggle">
                        <Dropdown.Item onClick={subToggleMainOne}>
                          Traction 1
                        </Dropdown.Item>
                        <Dropdown.Item onClick={subToggleMainTwo}>
                          Traction 2
                        </Dropdown.Item>
                        <Dropdown.Item onClick={subToggleMainThree}>
                          Traction 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ) : null}
              {traction === "Training" ? (
                <div className="d-flex">
                  <span
                    className="pr-5"
                    style={{
                      color: "#186ab4",
                      fontSize: "24px",
                      fontWeight: "700"
                    }}
                  >
                    {traction}
                  </span>
                  <div className="training">
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="toggleBtn app-add-drp-btn"
                      >
                        TRAINING
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="navToggle">
                        <Dropdown.Item onClick={subToggleMgmtOne}>
                          Training 1
                        </Dropdown.Item>
                        <Dropdown.Item onClick={subToggleMgmtTwo}>
                          Training 2
                        </Dropdown.Item>
                        <Dropdown.Item onClick={subToggleMgmtThree}>
                          Training 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ) : null}
              {traction === "At" ? (
                <div className="d-flex">
                  <span
                    className="pr-5"
                    style={{
                      color: "#186ab4",
                      fontSize: "24px",
                      fontWeight: "700"
                    }}
                  >
                    {traction}
                  </span>
                  <div className="at">
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="toggleBtn app-add-drp-btn"
                      >
                        AT
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="navToggle">
                        <Dropdown.Item onClick={subToggleAppsOne}>
                          AT 1
                        </Dropdown.Item>
                        <Dropdown.Item onClick={subToggleAppsTwo}>
                          AT 2
                        </Dropdown.Item>
                        <Dropdown.Item onClick={subToggleAppsThree}>
                          AT 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ) : null}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default NavbarToggle;
