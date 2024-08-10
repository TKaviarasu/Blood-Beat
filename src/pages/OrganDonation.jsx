import React, { useState } from 'react';
import '../assets/css/OrganDonation.css';
import Footer from '../components/Footer';
import { NavBar } from '../components/Navbar';
import { FaEnvelope, FaPhone, FaCity, FaAddressCard, FaPen, FaVenusMars, FaBirthdayCake, FaUser, FaIdCard, FaHeartbeat } from 'react-icons/fa';

const OrganDonation = () => {
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
        organType: '',
        termsAccepted: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.termsAccepted) {
            alert('Organ Donate Form Submitted Successfully');
            console.log(formData);
        } else {
            alert('You must accept the terms and conditions to submit the form.');
        }
    };

    return (
        <div className="organ-donor-background">
            <NavBar />
            <div className="organ-donor-form-container">
                <div className="organ-donor-form-title">Organ Donation Form</div>
                <form onSubmit={handleSubmit} className="organ-donor-form">
                    <div className="organ-form-group">
                        <label htmlFor="donorName">
                            <FaUser className="organ-input-icon" />
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
                    <div className="organ-form-group">
                        <label htmlFor="donorId">
                            <FaIdCard className="organ-input-icon" />
                            <input
                                type="text"
                                id="donorId"
                                name="donorId"
                                placeholder="Donor ID"
                                value={formData.donorId}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="organ-form-group">
                        <label htmlFor="organType">
                            <FaHeartbeat className="organ-input-icon" />
                            <select id="organType" name="organType" value={formData.organType} onChange={handleChange} required>
                                <option value="">Select Organ</option>
                                <option value="Kidney">Kidney</option>
                                <option value="Liver">Liver</option>
                                <option value="Heart">Heart</option>
                                <option value="Lung">Lung</option>
                                <option value="Pancreas">Pancreas</option>
                                <option value="Intestine">Intestine</option>
                            </select>
                        </label>
                    </div>
                    <div className="organ-form-group">
                        <label htmlFor="gender">
                            <FaVenusMars className="organ-input-icon" />
                            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </label>
                    </div>
                    <div className="organ-form-group">
                        <label htmlFor="age">
                            <FaBirthdayCake className="organ-input-icon" />
                            <select id="age" name="age" value={formData.age} onChange={handleChange} required>
                                <option value="">Select Age</option>
                                <option value="18-25">18-25</option>
                                <option value="26-35">26-35</option>
                                <option value="36-45">36-45</option>
                                <option value="46-60">46-60</option>
                            </select>
                        </label>
                    </div>
                    <div className="organ-form-group">
                        <label htmlFor="city">
                            <FaCity className="organ-input-icon" />
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
                    <div className="organ-form-group">
                        <label htmlFor="email">
                            <FaEnvelope className="organ-input-icon" />
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
                    <div className="organ-form-group">
                        <label htmlFor="phone">
                            <FaPhone className="organ-input-icon" />
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
                    <div className="organ-form-group">
                        <label htmlFor="address">
                            <FaAddressCard className="organ-input-icon" />
                            <textarea
                                id="address"
                                name="address"
                                placeholder="Full Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </label>
                    </div>
                    <div className="organ-form-group">
                        <label htmlFor="description">
                            <FaPen className="organ-input-icon" />
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </label>
                    </div>
                    <div className="organ-form-group organ-checkbox-group">
                        <input
                            type="checkbox"
                            id="termsAccepted"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="termsAccepted">
                            I accept the <a href="#terms">terms and conditions</a>
                        </label>
                    </div>
                    <button type="submit" className="organ-submit-button-custom">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default OrganDonation;
