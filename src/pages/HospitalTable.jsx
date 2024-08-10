import React from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/HospitalTable.css'; // Import the CSS file

const hospitalsData = [
  {
    id: 1,
    name: 'Apollo Hospital (Chennai)',
    contact: '04428293333',
    email: 'contact@apollochennai.com',
    address: "123 Main St",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600001",
    service: 'Emergency, Cardiology, Neurology',
    capacity: '500 beds',
    specialities: 'Heart Surgery, Organ Transplant',
    lastUpdate: '24/7'
  },
  {
    id: 2,
    name: 'Fortis Malar Hospital (Chennai)',
    contact: '04442892222',
    email: 'contact@fortismalar.com',
    address: "123 Main St",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600001",
    service: 'Emergency, Orthopedics, Pediatrics',
    capacity: '400 beds',
    specialities: 'Joint Replacement, Pediatric Surgery',
    lastUpdate: '24/7'
  },
  // Add more hospitals as needed
];

const HospitalTable = () => {
    const { name } = useParams();
    const hospital = hospitalsData.find(h => h.name === decodeURIComponent(name));

    if (!hospital) {
        return <p>Hospital not found</p>;
    }

    return (
        <div>
            <NavBar />
            <div className="hospital-details-container">
                <h1>Details of {hospital.name}</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Column</th>
                            <th>Data</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{hospital.name}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{hospital.contact}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{hospital.email}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{hospital.address}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{hospital.city}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{hospital.state}</td>
                        </tr>
                        <tr>
                            <td>Pincode</td>
                            <td>{hospital.pincode}</td>
                        </tr>
                        <tr>
                            <td>Service</td>
                            <td>{hospital.service}</td>
                        </tr>
                        <tr>
                            <td>Capacity</td>
                            <td>{hospital.capacity}</td>
                        </tr>
                        <tr>
                            <td>Specialities</td>
                            <td>{hospital.specialities}</td>
                        </tr>
                        <tr>
                            <td>Updated On</td>
                            <td>{hospital.lastUpdate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default HospitalTable;
