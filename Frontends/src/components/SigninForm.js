import React, { Component } from "react";
import { connect } from "react-redux";
import SigninPage from "../containers/SigninPage";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/LogActions";

class SigninForm extends Component {
  submit = values => {
    this.props.registerUser(values, this.props.history);
  };

  render() {
    const { registerUser } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <Button>Back to homepage</Button>
        </Link>
        <h1>Please enter your details</h1>
        <SigninPage onSubmit={this.submit} registerUser={registerUser} />
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
  // les crochets remplacent "mapdispatchtoprops"
)(SigninForm);
