import React, { useState } from 'react';
import './UserForm.css';
import { Link, useHistory, useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="user-form-container">
      <h3>User Login</h3>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Log In</button>

        <p>New User? </p>
        <button onClick={(e) => navigate('/signup')} className="login">Login
      </button>
      </form>
    </div>
  );
};

export default UserForm;
