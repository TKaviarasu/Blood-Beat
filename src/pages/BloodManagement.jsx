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
                backgroundColor: '#00796b',
                borderColor: '#004d40',
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
            <h2>Blood Management</h2>
            <div className="blood-requests-table">
                <h3>Blood Requests</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Blood Group</th>
                            <th>City</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => (
                            <tr key={index}>
                                <td>{request.patientName}</td>
                                <td>{request.bloodGroup}</td>
                                <td>{request.city}</td>
                                <td>{request.quantity}</td>
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
