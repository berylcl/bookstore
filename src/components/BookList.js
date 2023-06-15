import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/booksSlice';
import './bookList.css';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  return (
    <div className="bookList">
      <ul>
        {Object.entries(books).map(([id, book]) => book.map((bookItem) => (
          <li key={id} className="book-item">
            <div className="book-details">
              <p>{bookItem.category}</p>
              <h2>{bookItem.title}</h2>
              <p className="author">{bookItem.author}</p>
              <div className="book-buttons">
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(id);
                  }}
                  className="bookButtons"
                >
                  delete
                </button>
                <button className="bookButtons" type="button">
                  edit
                </button>
                <button className="comment" type="button">
                  comment
                </button>
              </div>
            </div>
            <div className="progress-section">
              <div className="progress">
                <div className="progress">
                  <CircularProgressbar value={15} text={`${15}%`} />
                </div>
              </div>
              <div className="percentTag">
                15%
                <br />
                completed
              </div>
              <div className="section3">
                <p>CURRENT CHAPTER</p>
                <h3>Chapter 3</h3>
                <button className="progressButton" type="button">Update Progress</button>
              </div>
            </div>
          </li>
        )))}
      </ul>
    </div>
  );
};

export default BookList;
