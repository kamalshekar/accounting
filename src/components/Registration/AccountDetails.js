import React, { Component } from "react";
import { ProductConsumer } from "../../contextAPI/Context";
import "./register.css";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";
export default class AccountDetails extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {} = value;
          return (
            <div className="">
              <div className="container">
                <Form className="login-form form-width">
                  <p className="login-style">Account Details</p>

                  <Form.Item>
                    <Input
                      prefix={
                        <Icon
                          type="mail"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Enter Email"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={
                        <Icon
                          type="mail"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Confirm Email"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Item>
                </Form>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
