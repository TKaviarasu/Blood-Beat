import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/UserManagement.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditUser(user.id);
    setUserName(user.fullname);
    setUserEmail(user.email);
    setUserPassword(user.password);
    setUserPhone(user.phoneno);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/users/${editUser}`, {
        fullname: userName,
        email: userEmail,
        password: userPassword, // Include the password
        phoneno: userPhone,
      });
      const updatedUsers = users.map(user =>
        user.id === editUser ? { ...user, fullname: userName, email: userEmail, password: userPassword, phoneno: userPhone } : user
      );
      setUsers(updatedUsers);
      setEditUser(null);
    } catch (error) {
      console.error('Failed to update user', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Failed to delete user', error);
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h2 className="admin-dashboard-title">Users List</h2>
      <div className="user-list-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {editUser === user.id ? (
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  ) : (
                    user.fullname
                  )}
                </td>
                <td>
                  {editUser === user.id ? (
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editUser === user.id ? (
                    <input
                      type="text" // Change to text to make password visible
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                    />
                  ) : (
                    user.password // Display password as plain text
                  )}
                </td>
                <td>
                  {editUser === user.id ? (
                    <input
                      type="text"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                    />
                  ) : (
                    user.phoneno
                  )}
                </td>
                <td>
                  {editUser === user.id ? (
                    <>
                      <button className="action-button button-save" onClick={handleSave}>Save</button>
                      <button className="action-button button-cancel" onClick={() => setEditUser(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="action-button button-edit" onClick={() => handleEdit(user)}>Edit</button>
                      <button className="action-button button-delete" onClick={() => handleDelete(user.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
