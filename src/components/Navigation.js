import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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
      <div className="user-profile-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  </header>
);

export default Navigation;
