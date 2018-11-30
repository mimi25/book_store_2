import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from "../App";
import LoginForm from "../components/LoginForm"
import SigninForm from "../components/SigninForm"
import FetchBooksDetails from '../containers/FetchBooksDetails'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
      <Route path="/" exact component={App} />
      <Route path="/details/:id" component={FetchBooksDetails} />
      <Route path="/login" component={LoginForm}/>
      <Route path="/signin" component={SigninForm}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
store: PropTypes.object.isRequired,
}

export default Root;