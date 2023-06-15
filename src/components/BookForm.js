import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || author.trim() === '') {
      return;
    }

    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form">
      <div className="border" />
      <h4>Add New Book</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="title"
            required
          />
          <input
            type="text"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            aria-label="author"
            required
          />
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
          <button className="addBook" type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
