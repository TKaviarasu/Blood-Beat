import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import '../assets/css/OrganRequestManagement.css';

const OrganRequestManagement = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('/api/organ-requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching the organ requests', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="organ-request-management">
      <main className="main-content">
        <h1 className="title">Organ Request Management</h1>
        <div className="requests-container">
          {requests.length === 0 ? (
            <p>No organ requests found.</p>
          ) : (
            <table className="requests-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Organ Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(request => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.donorName}</td>
                    <td>{request.gender}</td>
                    <td>{request.age}</td>
                    <td>{request.city}</td>
                    <td>{request.email}</td>
                    <td>{request.phone}</td>
                    <td>{request.address}</td>
                    <td>{request.organType}</td>
                    <td>{request.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default OrganRequestManagement;
