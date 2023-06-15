import React from 'react';
import { Link } from 'react-router-dom';
import './bookList.css';

const Navigation = () => (
  <header>
    <nav className="navbar">
      <h1>BOOKSTORE CMS</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
