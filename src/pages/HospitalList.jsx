import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/HospitalList.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Footer from '../components/Footer';
import { NavBar } from '../components/Navbar';

const hospitalsData = [
    { name: "Apollo Hospital (Chennai)", contact: "04428293333", email: "contact@apollochennai.com" },
    { name: "Fortis Malar Hospital (Chennai)", contact: "04442892222", email: "contact@fortismalar.com" },
    { name: "Sri Ramachandra Medical Centre (Chennai)", contact: "04445928585", email: "contact@sriramachandra.edu.in" },
    { name: "Christian Medical College (Vellore)", contact: "04162281000", email: "contact@cmcvellore.ac.in" },
    { name: "MIOT International (Chennai)", contact: "04442002288", email: "contact@miotinternational.com" },
    { name: "Kauvery Hospital (Trichy)", contact: "04314029000", email: "contact@kauveryhospital.com" },
    { name: "PSG Hospitals (Coimbatore)", contact: "04222578189", email: "contact@psghospitals.com" },
    { name: "Ganga Hospital (Coimbatore)", contact: "04224388000", email: "contact@gangahospital.com" },
    { name: "KMCH (Coimbatore)", contact: "04222661199", email: "contact@kmchhospitals.com" },
    { name: "Global Hospitals (Chennai)", contact: "04444777000", email: "contact@globalhospitals.com" }
    // Add other hospitals with full details
];

const HospitalList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredHospitals = hospitalsData.filter(hospital =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleReset = () => {
        setSearchQuery('');
    };

    const handleHospitalClick = (hospital) => {
        navigate(`/hospital/${encodeURIComponent(hospital.name)}`, { state: { hospital } });
    };

    return (
        <div>
            <NavBar />
            <div className="hospital-list-container">
                <h1>All Hospital Lists</h1>
                <p>These are all available hospitals. Kindly click on the hospitals to see the details of it.</p>
                <div className="search-container">
                    <label htmlFor="searchInput">Enter Hospital Name:</label>
                    <input
                        type="text"
                        id="searchInput"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Enter Hospital Name"
                    />
                    <button onClick={handleReset}>Reset</button>
                </div>
                <div className="hospital-list">
                    {filteredHospitals.map((hospital, index) => (
                        <div 
                            key={index} 
                            className="hospital-item"
                            onClick={() => handleHospitalClick(hospital)}
                        >
                            <h2>{hospital.name}</h2>
                            <p>Contact: {hospital.contact}</p>
                            <p>Email: {hospital.email}</p>
                            <div className="location">
                                <FaMapMarkerAlt /> {hospital.city}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HospitalList;
