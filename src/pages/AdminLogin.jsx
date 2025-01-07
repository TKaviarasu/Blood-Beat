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
      navigate('/admin');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="admin-login-background">
      <div className="admin-login-container">
        <h2 className="admin-login-heading">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="admin-input-wrapper">
            <label className="admin-input-label">
              <FaEnvelope className="admin-icon" />
              <input
                type="email"
                className="admin-input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="admin-input-wrapper">
            <label className="admin-input-label">
              <FaLock className="admin-icon" />
              <input
                type="password"
                className="admin-input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button className="admin-submit-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
