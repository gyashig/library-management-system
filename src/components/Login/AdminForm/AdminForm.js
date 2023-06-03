import React, { useState } from 'react';
import './Adminstyle.css';

const AdminForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your admin login logic here
    console.log('Admin Form Submitted');
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="admin-form-container">
      <h3 className="admin-form-title">Admin Login</h3>
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="admin-username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="admin-username"
            value={username}
            onChange={handleUsernameChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="admin-password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="admin-password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="admin-form-submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
