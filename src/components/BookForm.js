import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addBook } from '../redux/books/booksSlice';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QOoKXyoyH79LaQpn50M/books/';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      category,
    };
    try {
      const response = await axios.post(API_URL, newBook);
      dispatch(addBook(response.data.result));
      setTitle('');
      setAuthor('');
      setCategory('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title:
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="title"
            required
          />
          Author:
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            aria-label="author"
            required
          />
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="category"
            required
          >
            <option value="">Select a category</option>
            <option value="african-fiction">African Fiction</option>
            <option value="nonfiction">Nonfiction</option>
            <option value="comedy">Comedy</option>
            <option value="religious">Religious</option>
          </select>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
