import React, { Component } from "react";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>My account</h1>
      </div>
    );
  }
}

export default MyAccount;
