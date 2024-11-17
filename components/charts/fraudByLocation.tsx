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

interface FraudByLocationChartProps {
  data: number[]; // Number of fraud cases per location
  labels: string[]; // Location labels (e.g., zip codes)
}

const FraudByLocationChart: React.FC<FraudByLocationChartProps> = ({
  data,
  labels,
}) => {
  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            label: "Fraud Cases",
            data: data,
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Fraud by Location (Zip Code)",
          },
        },
      }}
    />
  );
};

export default FraudByLocationChart;
