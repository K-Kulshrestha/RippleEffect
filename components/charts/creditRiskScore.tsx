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

interface CreditRiskScoreChartProps {
  data: number[]; // Fraud vs. Credit Risk Scores data
  labels: string[]; // Credit Risk Score categories (e.g., Low, Medium, High)
}

const CreditRiskScoreChart: React.FC<CreditRiskScoreChartProps> = ({
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
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Fraud vs. Credit Risk Score",
          },
        },
      }}
    />
  );
};

export default CreditRiskScoreChart;
