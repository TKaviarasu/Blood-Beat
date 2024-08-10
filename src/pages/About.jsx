import React from 'react';
import '../assets/css/About.css';
import whoImage from '../assets/images/whoweare.jpeg';
import missionImage from '../assets/images/mission.jpeg';
import visionImage from '../assets/images/vision.jpeg';
import whatWeDoImage from '../assets/images/whatwedo.jpeg';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="about-container">
                <div className="about-header">
                    <h1>About Life-Savers</h1>
                </div>
                <div className="about-content">
                    <h3>Who We Are</h3>
                    <img src={whoImage} alt="Who We Are" className="content-image" />
                    <p>
                        Life-Savers Blood Bank is committed to creating a sustainable and safe blood supply for hospitals and medical centers across the region. We believe in the power of community and the importance of saving lives through blood donation.
                    </p>
                    <div className="about-section">
                        <h3>Our Mission</h3>
                        <img src={missionImage} alt="Our Mission" className="content-image" />
                        <p>
                            Our mission is to inspire and facilitate voluntary blood donations to ensure that every patient in need receives the vital blood they require. We aim to foster a community of dedicated donors who regularly contribute to this life-saving cause.
                        </p>
                    </div>
                    <div className="about-section">
                        <h3>Our Vision</h3>
                        <img src={visionImage} alt="Our Vision" className="content-image" />
                        <p>
                            We envision a future where no one suffers from a lack of blood supply. Our goal is to build a reliable and responsive blood donation system that supports medical treatments, emergency care, and enhances overall public health.
                        </p>
                    </div>
                    <div className="about-section">
                        <h3>What We Do</h3>
                        <img src={whatWeDoImage} alt="What We Do" className="content-image" />
                        <p>
                            <strong>Blood Collection:</strong> We host regular blood donation events and manage permanent donation centers to collect blood from willing volunteers.
                        </p>
                        <p>
                            <strong>Processing and Testing:</strong> Every blood donation undergoes stringent testing and processing to ensure it is safe for transfusion.
                        </p>
                        <p>
                            <strong>Distribution:</strong> We ensure timely and efficient distribution of blood and blood components to medical facilities in need.
                        </p>
                        <p>
                            <strong>Education and Outreach:</strong> We raise awareness about the critical need for blood donations and educate the public on how they can help save lives.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
