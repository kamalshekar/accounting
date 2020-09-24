import React, { Component } from "react";
import { ProductConsumer } from "../../contextAPI/Context";

export default class Account extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { email } = value;
          return (
            <div>
              <div class="my-5 pt-5">
                <h5>Account</h5>
                <div class="my-5 d-flex">
                  <div class="mr-3">Email</div>
                  <div class="text-muted text-right">{email}</div>
                </div>
                <div class="my-5 d-flex">
                  <div class="my-auto mr-3">Password</div>
                  <div class="my-auto mr-auto text-muted"></div>
                  <a
                    class="my-auto ml-3 mr-lg-5 btn btn-sm btn-outline-dark"
                    href="/user/change-password"
                  >
                    Edit
                  </a>
                </div>
                <div class="my-5 d-flex">
                  <div class="my-auto mr-3">Two-factor authentication</div>
                  <div class="my-auto mr-auto text-muted"></div>
                  <a
                    class="my-auto ml-3 mr-lg-5 btn btn-sm btn-outline-dark"
                    href="/user/profile/enable_2fa"
                  >
                    Enable
                  </a>
                </div>
                <div class="my-5 d-flex">
                  <div class="my-auto mr-3">Credits</div>
                  <div class="my-auto mr-auto text-muted">$0.00</div>
                  <a
                    class="my-auto ml-3 mr-lg-5 btn btn-sm btn-outline-dark"
                    href="/invite"
                  >
                    Earn More
                  </a>
                </div>
                <div class="my-5 d-flex">
                  <div class="my-auto mr-auto">
                    Delete my account
                    <div class="text-muted small">
                      This deletes{" "}
                      <strong>all your CoinTracker account data</strong>{" "}
                      including exchanges, wallets, transactions and trade
                      history. This action is irreversible.
                    </div>
                  </div>
                  <a
                    class="my-auto ml-3 mr-lg-5 btn btn-sm btn-outline-dark flex-shrink-0"
                    data-href=""
                    data-toggle="modal"
                    data-target="#delete-feedback"
                    href="#"
                  >
                    Delete Account
                  </a>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
