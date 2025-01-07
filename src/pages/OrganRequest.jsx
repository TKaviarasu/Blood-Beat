import React, { useState } from 'react';
import { FaUser, FaVenusMars, FaCity, FaEnvelope, FaPhone, FaAddressCard, FaNotesMedical, FaSortNumericDown } from 'react-icons/fa';
import '../assets/css/OrganRequest.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const OrganRequest = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    gender: '',
    age: '',
    city: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    organType: '',
    quantity: 1,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      const response = await fetch("http://localhost:8080/api/organrequests/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Organ Request Form Submitted Successfully");
        setFormData({
          patientName: '',
          gender: '',
          age: '',
          city: '',
          email: '',
          phone: '',
          address: '',
          description: '',
          organType: '',
          quantity: 1,
          termsAccepted: false,
        });
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-background">
      <NavBar />
      <div className="form-container">
        <h2 className="form-title">Organ Request Form</h2>
        <form onSubmit={handleSubmit} className="organ-request-form">
          {[ 
            { label: 'Patient Name', name: 'patientName', type: 'text', icon: <FaUser /> },
            { label: 'Age', name: 'age', type: 'number', icon: <FaSortNumericDown /> },
            { label: 'City', name: 'city', type: 'text', icon: <FaCity /> },
            { label: 'Email', name: 'email', type: 'email', icon: <FaEnvelope /> },
            { label: 'Phone', name: 'phone', type: 'tel', icon: <FaPhone /> },
            { label: 'Address', name: 'address', type: 'text', icon: <FaAddressCard /> }
          ].map((field, index) => (
            <div key={index} className="form-group">
              <div className="input-container">
                {field.icon && <span className="input-icon">{field.icon}</span>}
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.label} 
                  required
                />
                <label className="label-container">{field.label}</label>
              </div>
            </div>
          ))}

          <div className="form-group">
            <div className="input-container">
              <FaVenusMars className="input-icon" />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label className="label-container">Gender</label>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <FaNotesMedical className="input-icon" />
              <select
                name="organType"
                value={formData.organType}
                onChange={handleChange}
                required
              >
                <option value="Organ Type">Organ Type</option>
                <option value="Heart">Heart</option>
                <option value="Liver">Liver</option>
                <option value="Kidney">Kidney</option>
                <option value="Lungs">Lungs</option>
                <option value="Pancreas">Pancreas</option>
                <option value="Intestine">Intestine</option>

              </select>
              <label className="label-container">Organ Type</label>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <FaSortNumericDown className="input-icon" />
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                required
              />
              <label className="label-container">Quantity</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <br></br>
            <label className="label-container">I accept the terms and conditions</label>
            <br></br>
          </div>

          <button type="submit" className="submit-button-custom">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default OrganRequest;
