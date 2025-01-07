import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../assets/css/BloodManagement1.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BloodManagement1 = () => {
    const [donors, setDonors] = useState([]);

    // Fetch donors on initial load
    useEffect(() => {
        fetchDonors();
    }, []);

    const fetchDonors = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/donors/all');
            const data = await response.json();
            setDonors(data);
        } catch (error) {
            console.error('Error fetching donor data:', error);
        }
    };

    // Delete donor function
    const deleteDonor = async (id) => {
        try {
            console.log(`Sending DELETE request for donor ID: ${id}`);
            
            const response = await fetch(`http://localhost:8080/api/donors/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log(`Donor with ID ${id} deleted successfully`);
                // Filter out the donor from the current list after deletion
                setDonors((prevDonors) => prevDonors.filter((donor) => donor.id !== id));
            } else {
                console.error('Failed to delete donor. Response:', response);
            }
        } catch (error) {
            console.error('Error deleting donor:', error);
        }
    };

    // Prepare data for the chart
    const bloodGroupQuantities = donors.reduce((acc, donor) => {
        if (donor.bloodGroup in acc) {
            acc[donor.bloodGroup] += donor.quantity;
        } else {
            acc[donor.bloodGroup] = donor.quantity;
        }
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(bloodGroupQuantities),
        datasets: [
            {
                label: 'Total Blood Donations (Units)',
                data: Object.values(bloodGroupQuantities),
                backgroundColor: 'rgba(244, 164, 96, 0.6)', // SandyBrown color
                borderColor: 'rgba(244, 164, 96, 1)',
                borderWidth: 2,
                borderRadius: 8,
                hoverBackgroundColor: 'rgba(210, 140, 80, 0.8)',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#444',
                    font: {
                        size: 16,
                        family: 'Arial, sans-serif',
                    },
                },
            },
            tooltip: {
                backgroundColor: '#ffffff',
                titleColor: '#333',
                titleFont: { size: 14, family: 'Arial, sans-serif' },
                bodyColor: '#333',
                borderColor: 'rgba(244, 164, 96, 1)',
                borderWidth: 1,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return ` ${context.label}: ${context.raw} units`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#444',
                    font: { size: 14, family: 'Arial, sans-serif' },
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(210, 140, 80, 0.3)',
                    borderDash: [4, 4],
                },
                ticks: {
                    color: '#444',
                    font: { size: 14, family: 'Arial, sans-serif' },
                    stepSize: 1,
                },
            },
        },
    };

    return (
        <div className="blood-management">
            <h1>Blood Donor Management</h1>
            <br></br>
            <table className="donor-table">
                <thead>
                    <tr>
                        <th>Donor Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Blood Group</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {donors.map((donor) => (
                        <tr key={donor.id}>
                            <td>{donor.donorName}</td>
                            <td>{donor.gender}</td>
                            <td>{donor.age}</td>
                            <td>{donor.bloodGroup}</td>
                            <td>{donor.city}</td>
                            <td>{donor.email}</td>
                            <td>{donor.phone}</td>
                            <td>{donor.quantity}</td>
                            <td>{donor.description}</td>
                            <td>
                                <button 
                                    onClick={() => deleteDonor(donor.id)} 
                                    className="delete-btn"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="chart-container">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default BloodManagement1;
