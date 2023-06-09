import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <BookForm onAddBook={handleAddBook} />
      <BookList books={books} onDeleteBook={handleDeleteBook} />
    </div>
  );
};

export default HomePage;
