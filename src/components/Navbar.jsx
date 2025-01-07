

import React, { useState, useRef, useEffect } from 'react';
import '../../src/assets/css/Navbar.css';
import logo from '../assets/images/bblogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [inventoryDropdownOpen, setInventoryDropdownOpen] = useState(false);

  const serviceDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);
  const inventoryDropdownRef = useRef(null);

  const toggleServiceDropdown = () => {
    setServiceDropdownOpen((prev) => !prev);
  };

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen((prev) => !prev);
  };

  const toggleInventoryDropdown = () => {
    setInventoryDropdownOpen((prev) => !prev);
  };

  // Handle click outside dropdowns
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
      if (
        inventoryDropdownRef.current &&
        !inventoryDropdownRef.current.contains(event.target) &&
        !event.target.closest('.inventory-dropdown')
      ) {
        setInventoryDropdownOpen(false);
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
            <div className="dropdown-content" ref={serviceDropdownRef}>
              <Link to="/donor">Blood Donate</Link>
              <Link to="/requests">Blood Requests</Link>
            </div>
          </li>
          <li><Link to="/hospitals">Hospital</Link></li>
          <li><Link to="/blood_bank">BloodBank</Link></li>
          <li className="dropdown inventory-dropdown" ref={inventoryDropdownRef}>
            <a href="#inventory" className="dropbtn" onClick={toggleInventoryDropdown}>Inventory</a>
            {inventoryDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/inventory">Blood Inventory</Link>
                <Link to="/organ-inventory">Organ Inventory</Link>
              </div>
            )}
          </li>
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
