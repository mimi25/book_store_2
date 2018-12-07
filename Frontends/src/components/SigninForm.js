import React, { Component } from "react";
import { connect } from "react-redux";
import SigninPage from "../containers/SigninPage";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { registerUser } from "../actions/LogActions";

class SigninForm extends Component {
  submit = values => {
    this.props.registerUser(values, this.props.history);
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <Button color="primary" variant="contained">
            Back to homepage
          </Button>
        </Link>
        <h1>Please enter your details</h1>
        <SigninPage onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
  // les crochets remplacent "mapdispatchtoprops"
)(SigninForm);
