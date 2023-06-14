import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  return (
    <div>
      <h3>List of Books</h3>
      <ul>
        {Object.entries(books).map(([id, book]) => book.map((bookItem) => (
          <li key={id}>
            <div>
              <p>{bookItem.category}</p>
              <h2>{bookItem.title}</h2>
              <p>{bookItem.author}</p>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
            <div>
              {/* Placeholder */}
            </div>
          </li>
        )))}
      </ul>
    </div>
  );
};

export default BookList;
