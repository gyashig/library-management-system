import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbarstyles.css';
import { Link, useHistory, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <img src={require('./logo.png')} className="logo" alt="Logo" />
      <div className="search-container">
        <h1>Library Management System</h1>
      </div>
      <button onClick={(e) => navigate('/login')} className="login">Login
      </button>

    </nav>
  );
};

export default Navbar;
