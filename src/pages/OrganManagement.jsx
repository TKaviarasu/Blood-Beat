import React, { useState } from 'react';
import '../assets/css/OrganManagement.css';

const initialOrganDonated = [
  { donorId: 'D001', organType: 'Kidney', quantity: 3, location: 'Central Hospital', donationDate: '2024-07-01' },
  { donorId: 'D002', organType: 'Heart', quantity: 1, location: 'North Clinic', donationDate: '2024-07-15' },
  { donorId: 'D003', organType: 'Liver', quantity: 2, location: 'South Hospital', donationDate: '2024-07-20' },
  { donorId: 'D004', organType: 'Lung', quantity: 1, location: 'West Clinic', donationDate: '2024-07-25' },
];

const initialOrganRequested = [
  { requestId: 'REQ001', organType: 'Kidney', quantity: 1, location: 'Central Hospital', requestDate: '2024-08-01' },
  { requestId: 'REQ002', organType: 'Heart', quantity: 1, location: 'North Clinic', requestDate: '2024-08-02' },
  { requestId: 'REQ003', organType: 'Liver', quantity: 1, location: 'South Hospital', requestDate: '2024-08-03' },
  { requestId: 'REQ004', organType: 'Lung', quantity: 1, location: 'West Clinic', requestDate: '2024-08-04' },
];

const OrganManagement = () => {
  const [searchDonated, setSearchDonated] = useState('');
  const [searchRequested, setSearchRequested] = useState('');

  const filteredDonated = initialOrganDonated.filter(item =>
    item.organType.toLowerCase().includes(searchDonated.toLowerCase())
  );

  const filteredRequested = initialOrganRequested.filter(request =>
    request.organType.toLowerCase().includes(searchRequested.toLowerCase())
  );

  const handleReset = () => {
    setSearchDonated('');
    setSearchRequested('');
  };

  return (
    <div className="organ-management-container">
      <div className="title-container">
        <h2 className="organ-management-title">Organ Management</h2>
      </div>

      {/* Donated Organs Section */}
      <div className="organ-management-section">
        <h3 className="organ-management-section-title">Donated Organs</h3>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search donated organs by type..."
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
                <th>Organ Type</th>
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
                    <td>{item.organType}</td>
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

      {/* Requested Organs Section */}
      <div className="organ-management-section">
        <h3 className="organ-management-section-title">Requested Organs</h3>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search requested organs by type..."
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
                <th>Organ Type</th>
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
                    <td>{request.organType}</td>
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

export default OrganManagement;
