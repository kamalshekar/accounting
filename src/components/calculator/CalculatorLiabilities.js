import React, { Component } from "react";
import Liabilities from "./Liabilities";
import { ProductConsumer } from "../../contextAPI/Context";

export default class CalculatorLiabilities extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {} = value;

          return (
            <div className="calcMain">
              <Liabilities />
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
