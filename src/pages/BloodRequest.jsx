import React, { useState } from 'react';
import { FaUser, FaTint, FaCalendarAlt, FaCity, FaEnvelope, FaPhone, FaHospital, FaVenusMars, FaPen, FaSortNumericDown } from 'react-icons/fa';
import axios from 'axios';
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
        quantity: '',
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        

        axios.post('http://localhost:8080/bloodrequest', formData)
            .then(response => {
                alert('Blood Request Sent Successfully!');
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error submitting the blood request!', error);
            });
    };

    return (
        <div className="blood-request-page">
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div className='small-form-title'>
                    BLOOD REQUEST FORM
                </div>
                <br />
                <label>
                    <FaUser className='icon' />
                    <input
                        type="text"
                        name="patientName"
                        placeholder="Patient Name"
                        value={formData.patientName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
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
                <br />
                <label>
                    <FaSortNumericDown className='icon' />
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity (in units)"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    <FaCalendarAlt className='icon' />
                    <input
                        type="number"
                        name="patientAge"
                        placeholder="Patient Age"
                        value={formData.patientAge}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    <FaVenusMars className='icon' />
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
                <br />
                <label>
                    <FaCity className='icon' />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    <FaEnvelope className='icon' />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    <FaPhone className='icon' />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    <FaHospital className='icon' />
                    <textarea
                        name="hospitalAddress"
                        placeholder="Hospital Address"
                        value={formData.hospitalAddress}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <br />
                <label>
                    <FaPen className='icon' />
                    <textarea
                        name="description"
                        placeholder="Description/Requirements"
                        value={formData.description}
                        onChange={handleChange}
                        
                    ></textarea>
                </label>
                <br />
                
                <div className="button-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default BloodRequest;
