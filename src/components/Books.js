import React from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-cycle
import BookList from './BookList';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h2>Books</h2>
      <BookList books={books} />
    </div>
  );
};

export default Books;
