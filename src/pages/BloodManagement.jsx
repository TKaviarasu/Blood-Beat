import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import '../assets/css/BloodManagement.css';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BloodManagement = () => {
    const [requests, setRequests] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/bloodrequest')
            .then(response => {
                setRequests(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blood requests!', error);
            });
    }, []);
    
    // Aggregate data for the bar chart
    const aggregateData = () => {
        const data = requests.reduce((acc, request) => {
            const { bloodGroup } = request;
            if (!acc[bloodGroup]) {
                acc[bloodGroup] = 0;
            }
            acc[bloodGroup] += request.quantity;
            return acc;
        }, {});

        const labels = Object.keys(data);
        const values = Object.values(data);

        return { labels, values };
    };

    const chartData = aggregateData();
    
    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: 'Quantity of Blood Requested',
                data: chartData.values,
                backgroundColor: 'sandybrown', // Changed color
                borderColor: 'sandybrown', // Changed color
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        return `${label}: ${value}`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="blood-management">
            <h2>Blood Request Management</h2>
            <br></br>
            <br></br>
            <div className="blood-requests-table">
                <table>
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Blood Group</th>
                            <th>Quantity</th>
                            <th>Patient Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Phone Number</th>
                            <th>Hospital Address</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => (
                            <tr key={index}>
                                <td>{request.patientName}</td>
                                <td>{request.bloodGroup}</td>
                                <td>{request.quantity}</td>
                                <td>{request.patientAge}</td>
                                <td>{request.gender}</td>
                                <td>{request.email}</td>
                                <td>{request.city}</td>
                                <td>{request.phoneNumber}</td>
                                <td>{request.hospitalAddress}</td>
                                <td>{request.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
           
            <div className="blood-request-chart">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BloodManagement;
