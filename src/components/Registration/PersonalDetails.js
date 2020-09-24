import React, { Component } from "react";
import { ProductConsumer } from "../../contextAPI/Context";
import "./register.css";
import { Form, Col } from "react-bootstrap";
import atlogo from "../../Images/at.png";
import { DatePicker } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default class PersonalDetails extends Component {
  state = {
    startDate: new Date(),
    phone: ""
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {} = value;
          return (
            <div>
              {" "}
              <div className=" pl-5 pr-5">
                <img
                  src={atlogo}
                  className="mt-3 mb-5 img-fluid"
                  style={{ width: "20rem" }}
                ></img>
                <p className="login-style" style={{ marginBottom: "0" }}>
                  Personal Details
                </p>
                <p className="para-style">
                  Lets Get To Know Each Other A Bit Better
                </p>
                <Form>
                  <Form.Group>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="First name" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last name" />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group controlId="formBasicDate">
                    <DatePicker placeholder="Date of birth" />
                  </Form.Group>
                  <Form.Group controlId="formBasicDate">
                    <PhoneInput
                      country={"in"}
                      value={this.state.phone}
                      onChange={phone => this.setState({ phone })}
                    />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        as="select"
                        value="Choose..."
                        placeholder="State"
                      >
                        <option>Country</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        as="select"
                        value="Choose..."
                        placeholder="State"
                      >
                        <option>State</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Control placeholder="Address" />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Control placeholder="City" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Control placeholder="Zip" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                </Form>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
