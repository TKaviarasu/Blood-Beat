import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and login logic here

    // Redirect to AdminDashboard on successful login
    navigate('/admin');
  };

  return (
    <div className="admin-login-form">
      <h2 className="admin-login-title">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="admin-login-input-container">
          <label className="admin-login-label">
            <FaUser className="admin-login-icon" />
            <input type="text" className="admin-login-input" placeholder="Username" required />
          </label>
        </div>
        <div className="admin-login-input-container">
          <label className="admin-login-label">
            <FaEnvelope className="admin-login-icon" />
            <input type="email" className="admin-login-input" placeholder="Email" required />
          </label>
        </div>
        <div className="admin-login-input-container">
          <label className="admin-login-label">
            <FaLock className="admin-login-icon" />
            <input type="password" className="admin-login-input" placeholder="Password" required />
          </label>
        </div>
        <button className="admin-login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
