import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Blood Beat</h2>
                    <p>Your journey to becoming a life-saver could start with a blood donation.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/hospital">Hospital</a></li>
                        <li><a href="/blood-bank">Blood Bank</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Blood Beat
            </div>
        </footer>
    );
}

export default Footer;
