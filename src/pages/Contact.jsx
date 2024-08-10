import React from 'react';
import '../assets/css/Contact.css';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <div className="contact-container-custom">
                <div className="contact-header-custom">
                    <h1 className="contact-title-custom">Contact Us</h1>
                </div>
                <div className="contact-content-custom">
                    <div className="contact-info-custom">
                        <h2 className="info-title-custom">Get in Touch</h2>
                        <p className="info-text-custom">
                            If you have any questions or would like more information about donating blood, please contact us. We are here to help!
                        </p>
                        <div className="info-details-custom">
                            <p><strong>Main Office:</strong> 123 Blood Bank Street, Chennai, Tamil Nadu, 600001</p>
                            <p><strong>Phone:</strong> (044) 1234-5678</p>
                            <p><strong>Email:</strong> contact@lifesaversbloodbank.org</p>
                            <h3 className="info-title-custom">Other Locations in Tamil Nadu:</h3>
                            <p><strong>Madurai:</strong> 456 Donation Road, Madurai, Tamil Nadu, 625001</p>
                            <p><strong>Coimbatore:</strong> 789 Lifeline Avenue, Coimbatore, Tamil Nadu, 641001</p>
                            <p><strong>Trichy:</strong> 321 Healthcare Lane, Trichy, Tamil Nadu, 620001</p>
                        </div>
                    </div>
                    <div className="contact-form-custom">
                        <h2 className="form-title-custom">Send Us a Message</h2>
                        <form>
                            <div className="form-group-custom">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group-custom">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group-custom">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-button-custom">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="map-container-custom">
                    <h2 className="map-title-custom">Our Locations</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.305673974654!2d78.13384971480036!3d10.790483992315516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf66e76975e73%3A0x5a8e6b1e0e60b3a2!2sTrichy%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1626350998674!5m2!1sen!2sin"
                        className="map-iframe-custom"
                        allowFullScreen
                        title="Map of Blood Bank Locations in Tamil Nadu"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
