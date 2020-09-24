import React, { Component } from 'react'

export default class Setting extends Component {
  render() {
    return (
      <div>
        <div class="mb-5">
          <h5>Settings</h5>
          <div class="my-5 d-flex">
            <div class="my-auto mr-3">Home Country</div>
            <div class="my-auto mr-auto text-muted">Canada</div>
            <a
              class="my-auto ml-3 mr-lg-5 btn btn-sm btn-outline-dark"
              href="/user/country"
            >
              Edit
            </a>
          </div>
          <div class="my-5 d-flex">
            <div class="my-auto mr-3">Base Currency</div>
            <div class="my-auto mr-auto text-muted">CAD</div>
            <a
              class="my-auto ml-3 mr-lg-5 btn btn-sm btn-outline-dark"
              href="/user/currency"
            >
              Edit
            </a>
          </div>
          <div class="my-5 d-flex">
            <div class="my-auto mr-3">Cost Basis Method</div>
            <div class="my-auto mr-auto text-muted">
              Adjusted cost base (ACB) - Canada
            </div>
            <a
              class="my-auto ml-3 mr-lg-5 btn btn-sm btn-outline-dark"
              href="#"
              data-href=""
              data-toggle="modal"
              data-target="#set-cost-basis"
            >
              Edit
            </a>
          </div>
          <div class="my-5 d-flex">
            <div class="my-auto mr-3">Tax Year</div>
            <div class="my-auto mr-auto text-muted">Jan 1 to Dec 31</div>
            <a
              class="my-auto ml-3 mr-lg-5 btn btn-sm btn-outline-dark"
              href="/user/tax_year"
            >
              Edit
            </a>
          </div>
        </div>
      </div>
    );
  }
}
