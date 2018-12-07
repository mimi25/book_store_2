import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import LoginForm from "../components/LoginForm";
import SigninForm from "../components/SigninForm";
import FetchBooksDetails from "../containers/FetchBooksDetails";
import MyAccount from "./MyAccount";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MuiTheme from "../theme/MuiTheme";

const Root = ({ store }) => (
  <div>
    <MuiThemeProvider theme={MuiTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/details/:id" component={FetchBooksDetails} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signin" component={SigninForm} />
            <Route path="/myaccount" component={MyAccount} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  </div>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
