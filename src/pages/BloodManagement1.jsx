import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../assets/css/BloodManagement1.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BloodManagement1 = () => {
    const [donors, setDonors] = useState([]);

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

    // Prepare data for the bar chart
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
                label: 'Total Quantity of Blood Donations',
                data: Object.values(bloodGroupQuantities),
                backgroundColor: 'rgba(244, 164, 96, 0.5)', // Sandy brown color
                borderColor: 'rgba(244, 164, 96, 1)', // Sandy brown color
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(244, 164, 96, 0.7)', // Sandy brown hover color
                hoverBorderColor: 'rgba(244, 164, 96, 1)',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        family: 'Arial, sans-serif',
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw} units`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    borderDash: [5, 5],
                    color: '#e0e0e0',
                },
                ticks: {
                    stepSize: 10,
                    font: {
                        size: 12,
                        family: 'Arial, sans-serif',
                    },
                },
            },
        },
    };

    return (
        <div className="blood-management">
            <h1>Blood Donor Management</h1>
            <br></br>
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
                        </tr>
                    ))}
                </tbody>
            </table>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default BloodManagement1;
