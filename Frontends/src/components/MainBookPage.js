import React, { Component } from 'react';
import { Button } from "reactstrap"
import { Link } from "react-router-dom";
import SearchBooks from '../containers/SearchBooks';
import FetchBooks from "../containers/FetchBooks";

class MainBookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Link to="/login"><Button>Login</Button></Link>
                <Link to="/signin"><Button>Sign in</Button></Link>
                <h1>Welcome to my IT book store</h1>
                <SearchBooks />
                <FetchBooks />
            </div>
        );
    }
}

export default MainBookPage;