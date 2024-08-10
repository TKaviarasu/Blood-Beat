import React from 'react';
import '../assets/css/UserManagement.css';
import {
  FaUserEdit,
  FaTrashAlt,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const users = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'User',
    address: 'New York, USA',
    contact: '111-222-3333',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    role: 'User',
    address: 'Los Angeles, USA',
    contact: '444-555-6666',
  },
  {
    name: 'Alice Johnson',
    email: 'alicej@example.com',
    role: 'User',
    address: 'Chicago, USA',
    contact: '777-888-9999',
  },
  {
    name: 'Bob Brown',
    email: 'bobb@example.com',
    role: 'User',
    address: 'Houston, USA',
    contact: '000-111-2222',
  },
];

const UserManagement = () => {
  return (
    <div className="user-management">
      <h1>User Management</h1>
      <div className="user-list">
        <ul>
          {users.map((user, index) => (
            <li key={index} className="user-item">
              <div className="user-details">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-email">
                  <FaEnvelope className="user-icon" /> <b>Email:</b> {user.email}
                </p>
                <p className="user-role">
                  <FaBriefcase className="user-icon" /> <b>Role:</b> {user.role}
                </p>
                <p className="user-address">
                  <FaMapMarkerAlt className="user-icon" /> <b>Address:</b> {user.address}
                </p>
                <p className="user-contact">
                  <FaPhone className="user-icon" /> <b>Contact:</b> {user.contact}
                </p>
              </div>
              <div className="user-actions">
                <button className="edit-btn">
                  <FaUserEdit /> Edit
                </button>
                <button className="delete-btn">
                  <FaTrashAlt /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;
