import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import '../assets/css/OrganRequestManagement.css';

const OrganRequestManagement = () => {
  const [organRequests, setOrganRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/organrequests/all");
        if (response.ok) {
          const data = await response.json();
          setOrganRequests(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for the bar chart
  const organTypes = organRequests.map(request => request.organType);
  const organTypeCounts = organTypes.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(organTypeCounts),
    datasets: [
      {
        label: 'Organ Requests',
        data: Object.values(organTypeCounts),
        backgroundColor: '#f4a460',
        borderColor: '#8b4513',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="organ-request-management">
      <h2>Organ Request Management</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Organ Type</th>
            <th>Quantity</th>
            <th>City</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {organRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.patientName}</td>
              <td>{request.age}</td>
              <td>{request.gender}</td>
              <td>{request.organType}</td>
              <td>{request.quantity}</td>
              <td>{request.city}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="chart-container">
        <h3>Organ Requests by Type</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default OrganRequestManagement;
