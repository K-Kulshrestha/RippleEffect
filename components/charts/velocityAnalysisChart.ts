import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface VelocityAnalysisChartProps {
  labels: string[]; // Time or period labels
  fraudData: number[]; // Fraud cases data
  legitimateData: number[]; // Legitimate cases data
}

const VelocityAnalysisChart: React.FC<VelocityAnalysisChartProps> = ({ labels, fraudData, legitimateData }) => {
  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            label: 'Fraud Cases',
            data: fraudData,
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1,
          },
          {
            label: 'Legitimate Cases',
            data: legitimateData,
            fill: false,
            borderColor: 'rgba(54, 162, 235, 1)',
            tension: 0.1,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Velocity Analysis',
          },
        },
      }}
    />
  );
};

export default VelocityAnalysisChart;
