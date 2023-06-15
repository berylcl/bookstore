import React from 'react';
import { Link } from 'react-router-dom';
import './bookList.css';

const Navigation = () => (
  <header>
    <nav className="navbar">
      <h1>BOOKSTORE CMS</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
