import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic client-side validation
    if (!email || !password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // Static credentials for demonstration
    const validEmail = 'admin@gmail.com';
    const validPassword = 'admin';

    if (email === validEmail && password === validPassword) {
      // Navigate to the admin dashboard on successful login
      navigate('/admin');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="admin-login-form">
      <h2 className="admin-login-title">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="admin-login-input-container">
          <label className="admin-login-label">
            <FaEnvelope className="admin-login-icon" />
            <input
              type="email"
              className="admin-login-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="admin-login-input-container">
          <label className="admin-login-label">
            <FaLock className="admin-login-icon" />
            <input
              type="password"
              className="admin-login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="admin-login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
