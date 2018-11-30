import React, { Component } from "react";
import LoginPage from "../containers/LoginPage";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  submit = values => {};

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <Button>Back to homepage</Button>
        </Link>
        <h1>Please login</h1>
        <LoginPage onSubmit={this.submit} />
      </div>
    );
  }
}

export default LoginForm;
