import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../assets/css/Analysis.css'; // Import updated CSS file

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analysis = () => {
  const bloodData = {
    labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    datasets: [
      {
        label: 'Units Available',
        data: [30, 10, 20, 5, 15, 7, 40, 12],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Units Requested',
        data: [20, 5, 15, 7, 12, 4, 30, 8],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const organData = {
    labels: ['Kidney', 'Heart', 'Liver', 'Lung', 'Pancreas', 'Intestine'],
    datasets: [
      {
        label: 'Donations Available',
        data: [5, 2, 3, 1, 1, 2],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(153, 102, 255, 0.8)',
        hoverBorderColor: 'rgba(153, 102, 255, 1)',
      },
      {
        label: 'Donations Requested',
        data: [3, 1, 2, 1, 1, 1],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 159, 64, 0.8)',
        hoverBorderColor: 'rgba(255, 159, 64, 1)',
      },
    ],
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
            return `${context.dataset.label}: ${context.raw} units`;
          }
        }
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
  };

  return (
    <section className="section">
      <h2 className='ana'>Analytics</h2>
      <div className="chart-container">
        <div className="chart-box">
          <h3>Blood Donations Analytics</h3>
          <Bar data={bloodData} options={options} />
        </div>
        <div className="chart-box">
          <h3>Organ Donations Analytics</h3>
          <Bar data={organData} options={options} />
        </div>
      </div>
    </section>
  );
};

export default Analysis;
