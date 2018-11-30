import React from "react";
import { Field, reduxForm, Form } from "redux-form";
import { connect } from "react-redux";
import { Button } from "reactstrap";

let LoginPage = props => {
  const { handleSubmit, pristine, reset, submitting, errors } = props;
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ textAlign: "center" }}>
        <div>
          <label>Email</label>
          <Field
            placeholder="your email"
            component="input"
            name="email"
            type="email"
          />
        </div>
        <div>
          <label>Password</label>

          <Field
            placeholder="your password"
            component="input"
            name="password"
            type="password"
          />
        </div>
        <div>
          <Button disabled={pristine || submitting} type="submit">
            Log in
          </Button>
          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </Button>
        </div>
      </div>
    </Form>
  );
};

const mapStateToProps = state => ({
  errors: state.errors
});

LoginPage = connect(mapStateToProps)(LoginPage);

export default reduxForm({
  form: "login"
})(LoginPage);
