import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import BookList from './BookList';
import BookForm from './BookForm';
import Navigation from './Navigation';

const HomePage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <div className="content">
        <BookList books={books} />
        <BookForm />
      </div>
    </div>
  );
};

export default HomePage;
