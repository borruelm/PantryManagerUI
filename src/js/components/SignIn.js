import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
}  from 'reactstrap';

class SignIn extends Component {
  render() {
    return (
      <Container >
        <h2>Sign In Pantry Manager</h2>
        <Form >
          <Col>
            <FormGroup >
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button color="primary">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default SignIn;