import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import { removeBook } from '../redux/books/booksSlice';

// const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QOoKXyoyH79LaQpn50M/books/';

const BookList = () => {
  const { books, status, error } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  // const handleDelete = async (bookId) => {
  //   try {
  //     await axios.delete(`${API_URL}${bookId}`);
  //     dispatch(removeBook(bookId));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (status) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load...</div>;
  }

  return (
    <div>
      <h3>List of Books</h3>
      <ul>
        {/* {books.map((book) => ( */}
        {Object.entries(books).map(([id, book]) => book.map((bookItem) => (
          <li key={id}>
            <div>
              {/* Title: */}
              {/* {' '} */}
              {bookItem.title}
            </div>
            <div>
              {/* Author: */}
              {/* {' '} */}
              {bookItem.author}
            </div>
            <button type="button" onClick={() => dispatch(removeBook(id))}>
              Delete
            </button>
          </li>
        )))}
      </ul>
    </div>
  );
};

export default BookList;
