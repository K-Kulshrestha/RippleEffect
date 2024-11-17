import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface FraudDistributionChartProps {
  data: number[]; // Example data for fraud and legit cases
}

const FraudDistributionChart: React.FC<FraudDistributionChartProps> = ({
  data,
}) => {
  return (
    <Pie
      data={{
        labels: ["Fraud", "Legit"],
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Fraud Distribution",
          },
        },
      }}
    />
  );
};

export default FraudDistributionChart;
