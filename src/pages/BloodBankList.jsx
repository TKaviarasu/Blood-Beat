import React, { useState } from 'react';
import '../assets/css/BloodBankList.css';
import blood_drop from '../assets/images/blood-drop.jpg';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the location icon

const BloodBankList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const bloodBanks = [
    { name: 'Life Care Blood Bank', location: 'Chennai', contact: '9876543210', email: 'lifecare@bloodbank.com' },
    { name: 'Red Cross Blood Bank', location: 'Coimbatore', contact: '9876543211', email: 'redcross@bloodbank.com' },
    { name: 'Apollo Blood Bank', location: 'Madurai', contact: '9876543212', email: 'apollo@bloodbank.com' },
    { name: 'Government Blood Bank', location: 'Trichy', contact: '9876543213', email: 'govt@bloodbank.com' },
    { name: 'Jeevan Blood Bank', location: 'Chennai', contact: '9876543214', email: 'jeevan@bloodbank.com' },
  ];

  const filteredBloodBanks = bloodBanks.filter(bank =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className="blood-bank-list-container">
        <h1 className="page-title">All Blood Bank Lists</h1>
        <p className="page-description">These are all available blood banks in Tamil Nadu. Kindly click on the banks to see the details of it.</p>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter Bank Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="reset-button" onClick={() => setSearchTerm('')}>Reset</button>
        </div>
        <div className="blood-bank-items">
          {filteredBloodBanks.map((bank, index) => (
            <div key={index} className="blood-bank-item">
              <img src={blood_drop} alt="Blood Drop" className="blood-bank-image" />
              <div className="blood-bank-details">
                <h2 className="blood-bank-name">{bank.name}</h2>
                <p className="blood-bank-contact">Contact: {bank.contact}</p>
                <p className="blood-bank-email">Email: {bank.email}</p>
                <div className="location-info">
                  <FaMapMarkerAlt className="location-icon" />
                  <span className="location-text">{bank.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BloodBankList;
