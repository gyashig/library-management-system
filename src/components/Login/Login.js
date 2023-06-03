import React, { useState } from 'react';
import './Loginstyle.css';
import AdminForm from './AdminForm/AdminForm';
import UserForm from './UserForm/UserForm';
import SignupForm from './SignUpForm/SignUpForm';

const Login = () => {
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);

  const handleAdminClick = () => {
    setShowAdminForm(true);
    setShowUserForm(false);
  };

  const handleUserClick = () => {
    setShowUserForm(true);
    setShowAdminForm(false);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="login-buttons">
        <button
          className={`login-button ${showAdminForm ? 'active' : ''}`}
          onClick={handleAdminClick}
        >
          Admin
        </button>
        <button
          className={`login-button ${showUserForm ? 'active' : ''}`}
          onClick={handleUserClick}
        >
          User
        </button>
      </div>

      <div className="login-forms">
        {showAdminForm && <AdminForm />}
        {showUserForm && (
          <div>
            <UserForm />
            <SignupForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
