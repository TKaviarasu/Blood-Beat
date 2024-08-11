import React, { useState } from 'react';
import {
  FaBars,
  FaUsers,
  FaTint,
  FaHandHoldingMedical,
  FaChartBar,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/css/AdminDashboard.css';

// Import images
import admin1Image from '../assets/images/admin1.webp';
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
  const [bloodManagementOpen, setBloodManagementOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleBloodManagement = () => {
    setBloodManagementOpen(!bloodManagementOpen);
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
              <Link to="/user-management">
                <FaUsers className="menu-icon" /> User Management
              </Link>
            </li>
            <li>
              <div className="dropdown-toggle" onClick={toggleBloodManagement}>
                <FaTint className="menu-icon" /> Blood Management
              </div>
              {bloodManagementOpen && (
                <ul className="dropdown-submenu">
                  <li>
                    <Link to="/blood-management">
                      Blood Request Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/blood-donor-management">
                      Blood Donor Management
                    </Link>
                  </li>
                </ul>
              )}
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
                      <b>Email:</b> {admin.email}
                    </p>
                    <p className="admin-role">
                      <b>Role:</b> {admin.role}
                    </p>
                    <p className="admin-address">
                      <b>Address:</b> {admin.address}
                    </p>
                    <p className="admin-contact">
                      <b>Contact:</b> {admin.contact}
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
