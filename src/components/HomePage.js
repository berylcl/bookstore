import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import BookList from './BookList';
import BookForm from './BookForm';

const HomePage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <BookList books={books} />
      <BookForm />
    </div>
  );
};

export default HomePage;
