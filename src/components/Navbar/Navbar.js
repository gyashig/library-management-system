import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbarstyles.css';

const Navbar = () => {
  return (
    <nav>
      <img src={require('./logo.png')} className="logo" alt="Logo" />
      <div className="search-container">
        <h1>Library Management System</h1>
      </div>
      <div className="login">Login</div>
    </nav>
  );
};

export default Navbar;
