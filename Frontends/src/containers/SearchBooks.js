import React from "react";
import { connect } from "react-redux";
import { searchBook } from "../actions/booksActions";
import { Button } from "reactstrap";

const SearchBooks = ({ dispatch }) => {
  let input;

  return (
    <div>
      <h3>Search for a book by title, author, ISBN or keywords :</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(searchBook(input.value));
        }}
      >
        <input type="text" ref={node => (input = node)} />
       
        <Button type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};


export default connect()(SearchBooks);
