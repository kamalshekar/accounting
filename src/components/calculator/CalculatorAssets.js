import React, { Component } from "react";
import Assets from "./Assets";
import { ProductConsumer } from "../../contextAPI/Context";

export default class CalculatorAssets extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { swithcalculator } = value;

          return (
            <div className="calcMain">
              <Assets />
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
