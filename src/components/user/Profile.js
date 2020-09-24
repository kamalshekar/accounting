import React, { Component } from "react";
import { ProductConsumer } from "../../contextAPI/Context";
import Stickybar from "../footer/StickyBar";
import Setting from "./Setting";
import Notification from "./Notification";
import Account from "./Account";

export default class Profile extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {} = value;
          return (
            <>
              <div>
                <div className="container navbar-top-pad">
                  <h1 class="mb-5 h3 text-center">Settings</h1>
                  <div className="row justify-content-center">
                    <div class="col-lg-6">
                      <Setting />
                      <Notification />
                      <Account />
                    </div>
                  </div>
                </div>
              </div>

              <hr></hr>

              <Stickybar />
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}
