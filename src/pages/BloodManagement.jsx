import React, { useState } from 'react';
import '../assets/css/BloodManagement.css';

const initialDonated = [
  { donorId: 'D001', bloodType: 'A+', quantity: 50, location: 'Central Hospital', donationDate: '2024-07-01' },
  { donorId: 'D002', bloodType: 'B-', quantity: 20, location: 'North Clinic', donationDate: '2024-07-15' },
  { donorId: 'D003', bloodType: 'O+', quantity: 35, location: 'South Hospital', donationDate: '2024-07-20' },
  { donorId: 'D004', bloodType: 'AB-', quantity: 10, location: 'West Clinic', donationDate: '2024-07-25' },
];

const initialRequested = [
  { requestId: 'REQ001', bloodType: 'A+', quantity: 5, location: 'Central Hospital', requestDate: '2024-08-01' },
  { requestId: 'REQ002', bloodType: 'B-', quantity: 3, location: 'North Clinic', requestDate: '2024-08-02' },
  { requestId: 'REQ003', bloodType: 'O+', quantity: 10, location: 'South Hospital', requestDate: '2024-08-03' },
  { requestId: 'REQ004', bloodType: 'AB-', quantity: 2, location: 'West Clinic', requestDate: '2024-08-04' },
];

const BloodManagement = () => {
  const [searchDonated, setSearchDonated] = useState('');
  const [searchRequested, setSearchRequested] = useState('');

  const filteredDonated = initialDonated.filter(item =>
    item.bloodType.toLowerCase().includes(searchDonated.toLowerCase())
  );

  const filteredRequested = initialRequested.filter(request =>
    request.bloodType.toLowerCase().includes(searchRequested.toLowerCase())
  );

  const handleReset = () => {
    setSearchDonated('');
    setSearchRequested('');
  };

  return (
    <div className="blood-management-container">
      <div className="title-container">
        <h2 className="blood-management-title">Blood Management</h2>
      </div>

      {/* Donated Blood Section */}
      <div className="blood-management-section">
        <h3 className="blood-management-section-title">Donated Blood</h3>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search donated blood by type..."
            value={searchDonated}
            onChange={(e) => setSearchDonated(e.target.value)}
            className="search-input-field"
          />
          <button onClick={handleReset} className="reset-button">Reset</button>
        </div>

        <div className="summary-card-container">
          <h4 className="summary-card-title">Total Donated Units</h4>
          <p className="summary-card-value">{filteredDonated.reduce((total, item) => total + item.quantity, 0)} units</p>
        </div>

        <div className="table-section">
          <table className="data-table">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Donor ID</th>
                <th>Blood Type</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Donation Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonated.length > 0 ? (
                filteredDonated.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.donorId}</td>
                    <td>{item.bloodType}</td>
                    <td>{item.quantity}</td>
                    <td>{item.location}</td>
                    <td>{item.donationDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No matching records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Requested Blood Section */}
      <div className="blood-management-section">
        <h3 className="blood-management-section-title">Requested Blood</h3>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search requested blood by type..."
            value={searchRequested}
            onChange={(e) => setSearchRequested(e.target.value)}
            className="search-input-field"
          />
          <button onClick={handleReset} className="reset-button">Reset</button>
        </div>

        <div className="summary-card-container">
          <h4 className="summary-card-title">Total Requested Units</h4>
          <p className="summary-card-value">{filteredRequested.reduce((total, request) => total + request.quantity, 0)} units</p>
        </div>

        <div className="table-section">
          <table className="data-table">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Request ID</th>
                <th>Blood Type</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Request Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequested.length > 0 ? (
                filteredRequested.map((request, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{request.requestId}</td>
                    <td>{request.bloodType}</td>
                    <td>{request.quantity}</td>
                    <td>{request.location}</td>
                    <td>{request.requestDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No matching records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BloodManagement;
