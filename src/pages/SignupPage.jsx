import React, { useState, useEffect } from 'react';
import { FaGoogle, FaFacebookF, FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/SignupPage.css';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('signup-page-body');
    return () => {
      document.body.classList.remove('signup-page-body');
    };
  }, []);

  const validateFields = () => {
    if (!fullName || !email || !password || !phoneNumber) {
      return 'Please fill out all fields.';
    }
    return '';
  };

  const handleSignupClick = async () => {
    const message = validateFields();
    if (message) {
      setErrorMessage(message);
      alert(message);
    } else {
      setErrorMessage('');
      try {
        const response = await axios.post('http://localhost:8080/users/signup', {
          username: fullName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        });
        if (response.status === 200) {
          alert('Signed up successfully');
          navigate('/home');
        }
      } catch (error) {
        setErrorMessage('Failed to sign up. Please try again.');
        alert('Failed to sign up. Please try again.');
      }
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-title">Sign Up</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="signup-input-container">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Full Name"
            className="signup-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="signup-input-container">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signup-input-container">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signup-input-container">
          <FaPhone className="input-icon" />
          <input
            type="text"
            placeholder="Phone Number"
            className="signup-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <br />
        <button
          className="signup-button google-button"
          onClick={handleSignupClick}
        >
          <FaGoogle style={{ marginRight: '10px' }} /> Sign Up with Google
        </button>
        <button
          className="signup-button facebook-button"
          onClick={handleSignupClick}
        >
          <FaFacebookF style={{ marginRight: '10px' }} /> Sign Up with Facebook
        </button>
        <div className="signup-separator">or</div>
        <button
          className="signup-button submit-button"
          onClick={handleSignupClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
