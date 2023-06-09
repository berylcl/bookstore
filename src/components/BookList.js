import React, { useState } from 'react';
import Book from './Books';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'House of stone', author: 'Novuyo Rosa Thsuma' },
    { id: 2, title: 'The first Woman', author: 'Jennifer Makumbi' },
    { id: 3, title: "The fisherman's diary ", author: 'Chigozie Obioma' },
  ]);

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={handleDeleteBook} />
      ))}
    </div>
  );
};

export default BookList;
