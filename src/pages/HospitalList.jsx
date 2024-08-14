import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/HospitalList.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Footer from '../components/Footer';
import { NavBar } from '../components/Navbar';

const hospitalsData = [
    { name: "Apollo Hospital ", contact: "04428293333", email: "contact@apollochennai.com", city: "Chennai" },
    { name: "Fortis Malar Hospital ", contact: "04442892222", email: "contact@fortismalar.com", city: "Chennai" },
    { name: "Sri Ramachandra Medical Centre ", contact: "04445928585", email: "contact@sriramachandra.edu.in", city: "Chennai" },
    { name: "Christian Medical College ", contact: "04162281000", email: "contact@cmcvellore.ac.in", city: "Vellore" },
    { name: "MIOT International ", contact: "04442002288", email: "contact@miotinternational.com", city: "Chennai" },
    { name: "Kauvery Hospital ", contact: "04314029000", email: "contact@kauveryhospital.com", city: "Trichy" },
    { name: "PSG Hospitals ", contact: "04222578189", email: "contact@psghospitals.com", city: "Coimbatore" },
    { name: "Ganga Hospital ", contact: "04224388000", email: "contact@gangahospital.com", city: "Coimbatore" },
    { name: "KMCH ", contact: "04222661199", email: "contact@kmchhospitals.com", city: "Coimbatore" },
    { name: "Global Hospitals", contact: "04444777000", email: "contact@globalhospitals.com", city: "Chennai" }
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
                    <input
                        type="text"
                        id="searchInput"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Enter Hospital Name"
                    />
                    <button onClick={handleReset}>Reset</button>
                </div>
                <br></br>
                <br></br>
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
