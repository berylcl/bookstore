import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      <h3>List of Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
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
            <button type="button" onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
