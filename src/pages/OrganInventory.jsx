import React, { useState } from 'react';
import { FaBox, FaMapMarkerAlt } from 'react-icons/fa'; // Import container and location icons
import '../assets/css/OrganInventory.css';
import Heart from '../assets/images/heart.png';
import Kidney from '../assets/images/kidney.jpg';
import Liver from '../assets/images/liver.jpg';
import Lung from '../assets/images/lungs.jpg';
import Pancreas from '../assets/images/pancreas.jpg';
import Intestine from '../assets/images/intestine.jpg';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';

const OrganInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const organInventory = [
    { organ: 'Heart', available: 5, hospital: 'Apollo Hospital', contact: '7787678764', email: 'contact@apollo.com', city: 'Chennai', logo: Heart },
    { organ: 'Kidney', available: 8, hospital: 'Fortis Malar', contact: '89878898765', email: 'contact@fortismalar.com', city: 'Chennai', logo: Kidney },
    { organ: 'Liver', available: 3, hospital: 'PSG Hospitals', contact: '89878898765', email: 'contact@psghospitals.com', city: 'Coimbatore', logo: Liver },
    { organ: 'Lung', available: 2, hospital: 'Ganga Hospital', contact: '7787678764', email: 'contact@ganga.com', city: 'Coimbatore', logo: Lung },
    { organ: 'Pancreas', available: 4, hospital: 'Ramu Hospital', contact: '8796321450', email: 'contact@ramu.com', city: 'Madurai', logo: Pancreas },
    { organ: 'Intestine', available: 3, hospital: 'Krishna Hospital', contact: '76784520764', email: 'contact@krishna.com', city: 'Coimbatore', logo: Intestine },
  ];

  const filteredOrganInventory = organInventory.filter(item =>
    (item.organ.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.hospital.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filter === 'All' || (filter === 'High' && item.available > 5) || (filter === 'Low' && item.available <= 5))
  );

  return (
    <div className="inventory-container-unique">
      <NavBar />
      <div className="organ-inventory-unique">
        <header className="inventory-header-unique">
          <h1 className="inventory-title-unique">Organ Inventory</h1>
        </header>
        <section className="inventory-section-unique">
          <p className="inventory-description-unique">Available organs for donation. Click on an organ to view details.</p>
          <div className="search-bar-unique">
            <input
              type="text"
              className="search-input-unique"
              placeholder="Search Organ/City/Hospital"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search Organ/City/Hospital"
            />
            <button className="reset-button-unique" onClick={() => setSearchTerm('')}>Reset</button>
          </div>
          <div className="inventory-list-unique">
            {filteredOrganInventory.map((item, index) => (
              <div key={index} className="inventory-item-unique">
                <img src={item.logo} alt={`${item.organ} Icon`} className="inventory-item-logo-unique" />
                <div className="inventory-item-details-unique">
                  <h2 className="inventory-item-organ-unique">{item.organ} ({item.available} Available) <FaBox className="icon-container-unique" /></h2>
                  <p className="inventory-item-hospital-unique">Hospital: {item.hospital}</p>
                  <p className="inventory-item-contact-unique">Contact: {item.contact}</p>
                  <p className="inventory-item-email-unique">Email: {item.email}</p>
                  <p className="inventory-item-city-unique">
                    <FaMapMarkerAlt className="icon-location-unique" /> {item.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OrganInventory;
