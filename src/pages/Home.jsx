import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/images/banner1.jpg';
import image2 from '../assets/images/banner2.jpg';
import image3 from '../assets/images/banner3.jpg';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';

import { NavBar } from '../components/Navbar';
import '../assets/css/Home.css';
import Footer from '../components/Footer';

const images = [image1, image2, image3];

function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handleDonateClick = () => {
        navigate('/organ-donation'); // Navigate to the OrganDonation page
    };

    const handleRequestClick = () => {
        navigate('/organ-request'); // Navigate to the OrganRequest page
    };

    return (
        <div>
            <NavBar />
            <div className='home-container'>
                <div className="home-header">
                    <h2 className="home-title">Welcome to Blood Beat...!</h2>
                    <p className="home-description">Life of some patients is resting on a fraction of hope in quest of your gift of love.</p>
                </div>
                <div className="home-background" style={{ backgroundImage: `url(${images[currentImage]})` }}>
                    <div className="home-overlay"></div>
                </div>
            </div>
            <div className="content-section">
                <div className="content-container">
                    <div className="image-gallery">
                        <img src={img1} alt="Donor 1" className="donor-image" />
                        <img src={img2} alt="Donor 2" className="donor-image" />
                    </div>
                    <div className="contents-text">
                        <h1 className="contents-title">Unleash Your Inner Hero</h1>
                        <p className="contents-paragraph">
                            * Embark on your journey to becoming a life-saver through the simple act of donating blood. Blood donation is an extraordinary gesture of compassion that can make a profound difference.<br /><br />
                            * By donating blood, you supply a crucial resource that hospitals and medical facilities depend on to care for patients in critical need. Your contribution can truly save lives.
                            <br></br>
                            <br></br>
                            * Becoming a blood donor is an act of compassion and courage. It reflects the best of humanity – the willingness to help others in their time of need. Unleash your inner hero today and join us in this life-saving mission. Remember, every drop counts, and so does every donor.
                        </p>
                    </div>
                </div>
            </div>
            <div className="organ-donation-section">
                <h2 className="organ-donation-title">Become an Organ Donor</h2>
                <br></br>
                <p className="organ-donation-description">
                    Organ donation after death is a profound gift that offers hope and new life to those suffering from severe illnesses or injuries. By choosing to donate your organs, you ensure that your legacy extends beyond your lifetime, providing critical support to patients in need. Each donation can save multiple lives, from heart and liver transplants to kidney and lung replacements.
                    <br /><br />
                    The process of organ donation is carried out with the utmost respect and care, ensuring that your wishes are honored. Medical professionals handle the donation process with precision and compassion, adhering to strict ethical guidelines. This act of generosity not only impacts the lives of recipients but also provides solace to families, knowing their loved one made a meaningful difference.
                </p>
                <button className="donate-button" onClick={handleDonateClick}>Donate Organs</button>
                <br />
                <button className="request-button" onClick={handleRequestClick}>Request Organs</button>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
