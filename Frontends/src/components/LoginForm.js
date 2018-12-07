import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPage from "../containers/LoginPage";
import { loginUser } from "../actions/LogActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  submit = values => {
    this.props.loginUser(values, this.props.history);
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <Button color="primary" variant="contained">
            Back to homepage
          </Button>
        </Link>
        <h1>Please login</h1>
        <LoginPage onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(LoginForm);
