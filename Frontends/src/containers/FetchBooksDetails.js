import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBookDetails } from "../actions/booksActions";
import { addToCart } from "../actions/cartActions";
import Button from "@material-ui/core/Button";

class FetchBooksDetails extends Component {
  componentWillMount() {
    this.props.fetchBookDetails(this.props.match.params.id);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <Button color="primary" variant="contained">
            Back to homepage
          </Button>
        </Link>
        {this.props.bookDetails.map((t, index) => (
          <div key={index}>
            <h1>{t.title}</h1>
            <h3>{t.subtitle}</h3>
            <a href={t.url}>
              <img src={t.image} alt="" />
            </a>
            <h3>{t.price}</h3>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => this.props.addToCart(t.isbn13)}
            >
              Click to buy
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookDetails: state.books.bookDetails
});

FetchBooksDetails.propTypes = {
  bookDetails: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { fetchBookDetails, addToCart }
)(FetchBooksDetails);
