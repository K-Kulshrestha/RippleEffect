import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface FraudByDeviceOSChartProps {
  data: number[]; // Fraud cases per device OS
  labels: string[]; // OS labels (e.g., iOS, Android, Windows)
}

const FraudByDeviceOSChart: React.FC<FraudByDeviceOSChartProps> = ({
  data,
  labels,
}) => {
  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            label: "Fraud Cases by OS",
            data: data,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Fraud by Device OS (Bar)",
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      }}
    />
  );
};

export default FraudByDeviceOSChart;
