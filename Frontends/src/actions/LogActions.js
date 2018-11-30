import { GET_ERRORS } from "./types";
import axios from "axios";

export const registerUser = (user, history) => dispatch => {
  axios
    .post("/api/users/register", user)
    .then(res => history.push("./login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const loginUser = user => dispatch => {
  axios
    .post("api/users/login", user)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// So, from this file, we will send an AJAX request to the node.js server.
// We can not write this code inside Reducer because otherwise,
// it is a violation of pure function. So we need to write any database operations
// from actions. If we get any errors, then we dispatch the actions and
// reducer will handle that for us.
