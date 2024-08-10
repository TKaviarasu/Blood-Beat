import React, { useState, useRef, useEffect } from 'react';
import '../../src/assets/css/Navbar.css';
import logo from '../assets/images/bblogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const serviceDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);

  const toggleServiceDropdown = () => {
    setServiceDropdownOpen(prev => !prev);
  };

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(prev => !prev);
  };

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target) &&
        !event.target.closest('.service-dropdown')
      ) {
        setServiceDropdownOpen(false);
      }
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target) &&
        !event.target.closest('.account-dropdown')
      ) {
        setAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="BloodBridge Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="dropdown">
            <a href="#services" className="dropbtn">Services</a>
            <div className="dropdown-content">
              <Link to="/donor">Donor Management</Link>
              <Link to="/inventory">Inventory Management</Link>
              <Link to="/requests">Blood Requests</Link>
            </div>
          </li>
          <li><Link to="/hospitals">Hospital</Link></li>
          <li><Link to="/blood_bank">BloodBank</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="account-dropdown" ref={accountDropdownRef}>
            <FontAwesomeIcon icon={faUser} onClick={toggleAccountDropdown} />
            {accountDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/login" onClick={() => setAccountDropdownOpen(false)}>
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
                <Link to="/signup" onClick={() => setAccountDropdownOpen(false)}>
                  <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
