import React, { Component } from "react";
import { Switch } from "antd";

export default class Notification extends Component {
  state = {
    disabled: false
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };
  render() {
    return (
      <div>
        <div class="my-5 pt-5">
          <h5>Notifications</h5>
          <div class="my-3 mt-5 mb-5 d-flex">
            <div class="my-auto">New transactions notifications</div>
            <div class="my-auto ml-3 mr-auto text-muted"></div>
            <div className="my-auto mb-5 ml-3 mr-lg-5 ">
              <Switch size="small" onChange={this.handleDisabledChange} />
            </div>
          </div>

          <div class="my-3 mb-5 d-flex">
            <div class="my-auto">New transactions email</div>
            <div class="my-auto ml-3 mr-auto text-muted"></div>
            <div className="my-auto ml-3 mr-lg-5 ">
              <Switch size="small" onChange={this.handleDisabledChange} />
            </div>
          </div>

          <div class="my-3 mb-5 d-flex">
            <div class="my-auto">Daily portfolio notifications</div>
            <div class="my-auto ml-3 mr-auto text-muted"></div>
            <div className="my-auto ml-3 mr-lg-5 ">
              <Switch size="small" onChange={this.handleDisabledChange} />
            </div>
          </div>

          <div class="my-3 mb-5 d-flex">
            <div class="my-auto">Daily portfolio email</div>
            <div class="my-auto ml-3 mr-auto text-muted"></div>
            <div className="my-auto ml-3 mr-lg-5 ">
              <Switch size="small" onChange={this.handleDisabledChange} />
            </div>
          </div>

          <div class="my-3 mb-5 d-flex">
            <div class="my-auto">Product updates and promotional emails</div>
            <div class="my-auto ml-3 mr-auto text-muted"></div>
            <div className="my-auto mb-5 ml-3 mr-lg-5 ">
              <Switch size="small" onChange={this.handleDisabledChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
