import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { removeBook } from '../redux/books/booksSlice';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QOoKXyoyH79LaQpn50M/books/';

const BookList = () => {
  const books = useSelector((state) => state.books.data);

  const dispatch = useDispatch();

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`${API_URL}${bookId}`);
      dispatch(removeBook(bookId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>List of Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <div>
              Title:
              {' '}
              {book.title}
            </div>
            <div>
              Author:
              {' '}
              {book.author}
            </div>
            <button type="button" onClick={() => handleDelete(book.item_id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
