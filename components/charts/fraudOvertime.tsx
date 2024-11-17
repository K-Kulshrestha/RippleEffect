import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface FraudOverTimeChartProps {
  labels: string[]; // Labels (e.g., months or time periods)
  data: number[]; // Data for fraud cases over time
}

const FraudOverTimeChart: React.FC<FraudOverTimeChartProps> = ({ labels, data }) => {
  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            label: 'Fraud Cases',
            data: data,
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Fraud Over Time',
          },
        },
      }}
    />
  );
};

export default FraudOverTimeChart;
