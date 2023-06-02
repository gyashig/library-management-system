import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbarstyles.css'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="login">Login</div>
    </nav>
  );
};

export default Navbar;
