// src/BloodBankList.js
import React, { useState } from 'react';
import '../assets/css/BloodBankList.css';
import blood_drop from '../assets/images/blood-drop.jpg';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';

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
      <div className="blood-bank-list">
        <h1>All Blood Bank Lists</h1>
        <p>These are all available blood banks in Tamil Nadu. Kindly click on the banks to see the details of it.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Bank Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="reset-button" onClick={() => setSearchTerm('')}>Reset</button>
        </div>
        <div className="bank-list">
          {filteredBloodBanks.map((bank, index) => (
            <div key={index} className="bank-item">
              <img src={blood_drop} alt="Life Share Blood Bank" />
              <div>
                <h2>{bank.name} ({bank.location})</h2>
                <p>Contact: {bank.contact}</p>
                <p>Email: {bank.email}</p>
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
