import React, { useState } from 'react';
import {
  FaBars,
  FaTachometerAlt,
  FaUsers,
  FaTint,
  FaHandHoldingMedical,
  FaChartBar,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/css/AdminDashboard.css';

// Import images
import admin1Image from '../assets/images/admin1.webp'; // Adjust the path as necessary
import admin2Image from '../assets/images/admin2.jpg';
import admin3Image from '../assets/images/admin3.jpeg';
import admin4Image from '../assets/images/admin4.jpg';

// Sample admin data with images and details
const admins = [
  {
    name: 'Joe',
    image: admin1Image,
    email: 'joe@gmail.com',
    role: 'Super Admin',
    address: 'Chennai, Tamilnadu',
    contact: '123-456-7890',
  },
  {
    name: 'Richard',
    image: admin2Image,
    email: 'richard@gmail.com',
    role: 'Co-Admin',
    address: 'Chennai, Tamilnadu',
    contact: '987-654-3210',
  },
  {
    name: 'Kanmani',
    image: admin3Image,
    email: 'kanmani@gmail.com',
    role: 'Co-Admin',
    address: 'Coimbatore, Tamilnadu',
    contact: '456-789-1234',
  },
  {
    name: 'Amelia',
    image: admin4Image,
    email: 'amelia@gmail.com',
    role: 'Co-Admin',
    address: 'Chennai, Tamilnadu',
    contact: '789-123-4567',
  },
];

const AdminDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-header" onClick={toggleDropdown}>
          <FaBars className="dashboard-icon" />
          <h2>Admin Dashboard</h2>
        </div>
        <hr className="divider" />
        {dropdownOpen && (
          <ul className="sidebar-menu dropdown-menu">
            <li>
              <Link to="/blood-management">
                <FaTint className="menu-icon" /> Blood Management
              </Link>
            </li>
            <li>
              <Link to="/organ-management">
                <FaHandHoldingMedical className="menu-icon" /> Organ Management
              </Link>
            </li>
            <li>
              <Link to="/analysis">
                <FaChartBar className="menu-icon" /> Overall Analysis
              </Link>
            </li>
            <li>
              <Link to="/user-management">
                <FaUsers className="menu-icon" /> User Management
              </Link>
            </li>
          </ul>
        )}
      </aside>
      <main className="main-content">
        <div className="welcome-container">
          <h1>Welcome Admin...!</h1>
          <div className="admin-list">
            <h2>List of Admins</h2>
            <br />
            <br />
            <ul>
              {admins.map((admin, index) => (
                <li key={index} className="admin-item">
                  <img src={admin.image} alt={admin.name} className="admin-image" />
                  <div className="admin-details">
                    <h3 className="admin-name">{admin.name}</h3>
                    <p className="admin-email">
                      <FaEnvelope className="admin-icon" /> <b>Email:</b> {admin.email}
                    </p>
                    <p className="admin-role">
                      <FaBriefcase className="admin-icon" /> <b>Role:</b> {admin.role}
                    </p>
                    <p className="admin-address">
                      <FaMapMarkerAlt className="admin-icon" /> <b>Address:</b> {admin.address}
                    </p>
                    <p className="admin-contact">
                      <FaPhone className="contact-icon" /> <b>Contact:</b> {admin.contact}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
