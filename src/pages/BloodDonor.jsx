import React, { useState } from 'react';
import '../assets/css/BloodDonor.css';
import Footer from '../components/Footer';
import { NavBar } from '../components/Navbar';
import { FaEnvelope, FaPhone, FaCity, FaAddressCard, FaPen, FaVenusMars, FaBirthdayCake, FaUser, FaIdCard, FaTint, FaPlus } from 'react-icons/fa';

const BloodDonor = () => {
    const [formData, setFormData] = useState({
        donorName: '',
        donorId: '',
        gender: '',
        age: '',
        city: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        bloodGroup: '',
        quantity: '',
        termsAccepted: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.termsAccepted) {
            try {
                const response = await fetch('http://localhost:8080/api/donors/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    alert('Your form is submitted successfully!');
                    console.log('Form submitted:', formData);
                } else {
                    alert('Failed to submit form.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again.');
            }
        } else {
            alert('You must accept the terms and conditions to submit the form.');
        }
    };

    return (
        <div className="blood-donor-background">
            <NavBar />
            <div className="donor-form-container">
                <h2 className="form-title">Blood Donor Form</h2>
                <form onSubmit={handleSubmit} className="donor-form">
                    <div className="form-group-custom">
                        <label htmlFor="donorName">
                            <FaUser className="input-icon-custom" />
                            <input
                                type="text"
                                id="donorName"
                                name="donorName"
                                placeholder="Donor Name"
                                value={formData.donorName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group-custom">
                        <label htmlFor="gender">
                            <FaVenusMars className="input-icon-custom" />
                            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group-custom">
                        <label htmlFor="age">
                            <FaBirthdayCake className="input-icon-custom" />
                            <select id="age" name="age" value={formData.age} onChange={handleChange} required>
                                <option value="">Select Age</option>
                                <option value="18-25">18-25</option>
                                <option value="26-35">26-35</option>
                                <option value="36-45">36-45</option>
                                <option value="46-60">46-60</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group-custom">
                        <label htmlFor="bloodGroup">
                            <FaTint className="input-icon-custom" />
                            <select id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
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
                    <div className="form-group-custom">
                        <label htmlFor="quantity">
                            <FaPlus className="input-icon-custom" />
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                placeholder="Quantity (in units)"
                                value={formData.quantity}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group-custom">
                        <label htmlFor="city">
                            <FaCity className="input-icon-custom" />
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group-custom">
                        <label htmlFor="email">
                            <FaEnvelope className="input-icon-custom" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group-custom">
                        <label htmlFor="phone">
                            <FaPhone className="input-icon-custom" />
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group-custom">
                        <label htmlFor="address">
                            <FaAddressCard className="input-icon-custom" />
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group-custom">
                        <label htmlFor="description">
                            <FaPen className="input-icon-custom" />
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Additional Information"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="termsAccepted"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        />
                        <label htmlFor="termsAccepted" className="terms-checkbox-label">
                            I accept the terms and conditions
                        </label>
                    </div>
                    <br></br>
                    <div className="form-group-custom">
                        <button type="submit" className="submit-button-custom">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default BloodDonor;
