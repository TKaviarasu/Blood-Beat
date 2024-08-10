import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import '../assets/css/LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import background from '../assets/images/login.jpg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const validateFields = () => {
    if (!username || !email || !password) {
      return 'Please fill out all fields.';
    }
    return '';
  };

  const handleLoginClick = async () => {
    const message = validateFields();
    if (message) {
      setErrorMessage(message);
      alert(message);
    } else {
      try {
        const response = await axios.post('http://localhost:8080/users/login/email', {
          email: email,
          password: password
        });
  
        if (response.status === 200) {
          setErrorMessage('');
          navigate('/home');
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setErrorMessage('Invalid credentials');
          alert('Invalid credentials');
        } else {
          setErrorMessage('An error occurred. Please try again.');
          alert('An error occurred. Please try again.');
        }
      }
    }
  };
  

  const handleAdminLoginClick = () => {
    navigate('/adminlogin');
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${background})` }}>
      <div className="loginform-container">
        <h2 className="login-header">Login</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
        <div className="loginform-group">
          <div className="input-container">
            <FaUser className="loginicon" />
            <input
              type="text"
              placeholder="Username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="loginform-group">
          <div className="input-container">
            <FaEnvelope className="loginicon" />
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="loginform-group">
          <div className="input-container">
            <FaLock className="loginicon" />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button 
          type="submit" 
          className="loginsubmit-button"
          onClick={handleLoginClick}
        >
          Submit
        </button>
        <button 
          type="button" 
          className="admin-login-btn"
          onClick={handleAdminLoginClick}
        >
          Admin Login
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Signup here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
