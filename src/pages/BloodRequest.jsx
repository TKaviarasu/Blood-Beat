import React, { useState } from 'react';
import { FaUser, FaTint, FaCalendarAlt, FaCity, FaEnvelope, FaPhone, FaHospital, FaVenusMars, FaPen } from 'react-icons/fa';
import '../assets/css/BloodRequest.css';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';

const BloodRequest = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        bloodGroup: '',
        patientAge: '',
        gender: '',
        city: '',
        email: '',
        phoneNumber: '',
        hospitalAddress: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data here (e.g., send it to a server)
        alert('Blood Request Sent Successfully...!');
        console.log(formData);
    };

    return (
        <div className="blood-request-page">
            <NavBar />
            <br />
            <form onSubmit={handleSubmit}>
                <div className='small-form-title'>
                    BLOOD REQUEST FORM
                </div>
                <div>
                    <br></br>
                    <label>
                        <FaUser className='icon' />
                        <input
                            type="text"
                            name="patientName"
                            placeholder="Patient Name"
                            value={formData.patientName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <FaTint className='icon' />
                        <select
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <FaCalendarAlt className='icon' />
                        <input
                            type="number"
                            name="patientAge"
                            placeholder="Patient Age"
                            value={formData.patientAge}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <FaVenusMars className='icon' />
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <FaCity className='icon' />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <FaEnvelope className='icon' />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <FaPhone className='icon' />
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <FaHospital className='icon' />
                        <textarea
                            name="hospitalAddress"
                            placeholder="Hospital Address"
                            value={formData.hospitalAddress}
                            onChange={handleChange}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        <FaPen className='icon' />
                        <textarea
                            name="description"
                            placeholder="Description/Requirements"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </label>
                </div>
                <br></br>
                <div className="button-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <br />
            <Footer />
        </div>
    );
};

export default BloodRequest;
