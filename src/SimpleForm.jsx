import React, { Component } from "react";
import alertify from "alertifyjs";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./style/form.scss";

class SimpleForm extends Component {
  state = {
    fullname: "",
    email: "",
    description: "",
    city: "",
  };

  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      //   fullname: event.target.value,
      //   address: event.target.value,
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    alertify.success(`${this.state.fullname} added to database`, 2);
    alertify.success(`added to base ${this.state.email}`, 2);
    alertify.success(`added base ${this.state.description}`, 2);
    alertify.success(`added data ${this.state.city}`, 2);
  };

  render() {
    return (
      <div className="form-div">
        <Form onSubmit={this.submitHandler}>
          <FormGroup row>
            <Label for="fullname" sm={2}>
              Fullname
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Fullname"
                onChange={this.changeHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.changeHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="description" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Description"
                onChange={this.changeHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="city" sm={2}>
              Select City
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="city"
                id="city"
                onChange={this.changeHandler}
              >
                <option>Baku</option>
                <option>Ganja</option>
                <option>Naxchivan</option>
                <option>Gabala</option>
                <option>Gax</option>
              </Input>
            </Col>
          </FormGroup>
          <Col>
            <Button color="success" type="submit">
              Submit
            </Button>
          </Col>
        </Form>
      </div>
    );
  }
}

export default SimpleForm;
