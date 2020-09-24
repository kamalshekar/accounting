import React from "react";
import "antd/dist/antd.css";
import { Steps, Button, message } from "antd";
import "./register.css";
import AccountDetails from "./AccountDetails";
import PersonalDetails from "./PersonalDetails";
import EmailVerification from "./EmailVerification";
import Finish from "./Finish";
import loader from "../../Images/spin.gif";
import atgif from "../../Images/at.gif";

import { ProductConsumer } from "../../contextAPI/Context";

const { Step } = Steps;

const steps = [
  {
    title: "Account Details",
    content: <AccountDetails />
  },
  {
    title: "Personal Details",
    content: <PersonalDetails />
  },
  {
    title: "Email Verification",
    content: <EmailVerification />
  },
  {
    title: "Finish",
    content: <Finish />
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  onChange = current => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <ProductConsumer>
        {value => {
          const { spinner, spinnerFunction } = value;
          return (
            <div className="container-fluid" style={{ overflow: "hidden" }}>
              <div className="row">
                <div className="col-md-5 p-0">
                  <div className="form-align">
                    <div>
                      <div className="steps-content">
                        {steps[current].content}
                      </div>
                      <div className="step-position"></div>
                      <div className="steps-action">
                        {current > 0 && (
                          <Button
                            onClick={() => this.prev()}
                            style={{ marginRight: 8 }}
                            className="ml-5"
                          >
                            Previous
                          </Button>
                        )}
                        {/* {current === steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => message.success("Registered Successfully")}
                    >
                      Done
                    </Button>
                  )} */}
                        {current < steps.length - 1 && (
                          <Button
                            type="primary"
                            onClick={() => this.next()}
                            onClick={spinnerFunction}
                            className="ml-3"
                          >
                            Next
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="OpenAccount__goSignInLink">
                    Already have an account?
                    <a href="/">
                      <span> Sign In.</span>
                    </a>
                  </p>
                  {spinner ? (
                    <div>
                      <div className="loader">
                        <img src={loader} style={{ width: "11rem" }}></img>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="col-md-7 p-0">
                  <div
                    className="form-center bg-login"
                    style={{ height: "100vh" }}
                  >
                    <img
                      src={atgif}
                      className="img-fluid"
                      style={{ width: "50%" }}
                    />
                    <div className="stepper-style">
                      <Steps
                        direction="vertical"
                        current={current}
                        onChange={this.onChange}
                      >
                        {steps.map(item => (
                          <Step key={item.title} title={item.title} />
                        ))}
                      </Steps>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
