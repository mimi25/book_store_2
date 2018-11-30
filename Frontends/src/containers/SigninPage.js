import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, Form } from "redux-form";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const required = value => (value ? undefined : "field required");

let SigninPage = props => {
  const { handleSubmit, pristine, reset, submitting, errors } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ textAlign: "center" }}>
        <div>
          <label>Your name</label>
          <Field
            placeholder="your first and last name"
            component="input"
            name="name"
            type="text"
            validate={required}
          />
        </div>
        <div>
          <label>Your Email</label>
          <Field
            placeholder="your email"
            component="input"
            name="email"
            type="email"
            validate={required}
          />
        </div>
        <div>
          <label>Choose a Password</label>
          <Field
            placeholder="your password"
            component="input"
            name="password"
            type="password"
            validate={required}
          />
        </div>
        <div>
          <label>Repeat your Password</label>

          <Field
            placeholder="your password"
            component="input"
            name="passwordconf"
            type="password"
            validate={required}
          />
        </div>
        {errors.name && <div className="alert alert-danger">{errors.name}</div>}
        {errors.email && (
          <div className="alert alert-danger">{errors.email}</div>
        )}
        {errors.password && (
          <div className="alert alert-danger">{errors.password}</div>
        )}
        {errors.passwordconf && (
          <div className="alert alert-danger">{errors.passwordconf}</div>
        )}
        <div>
          <Button type="submit" disabled={pristine || submitting}>
            Sign in
          </Button>
          <Button type="button" disabled={pristine} onClick={reset}>
            Clear Values
          </Button>
          <Link to="/login">
            <Button type="button">I have an account</Button>
          </Link>
        </div>
      </div>
    </Form>
  );
};

const mapStateToProps = state => ({
  errors: state.errors
});

SigninPage = connect(mapStateToProps)(SigninPage);

export default reduxForm({
  form: "signin"
})(SigninPage);
