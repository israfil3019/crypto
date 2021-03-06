import React from "react";
import { Line } from "react-chartjs-2";
import { useFetch } from "../hooks/useFetch";
import moment from "moment";

const LineChart = () => {
  let timeX = [];
  let priceY = [];
  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      gradient.addColorStop(0, "rgba(140,84,255,0.001)");
      gradient.addColorStop(1, "rgba(140,84,255,0.1)");
    }

  return gradient;
}
  const { response } = useFetch(
    `https://api.binance.com/api/v3/klines?interval=1w&symbol=BTCUSDT&limit=14`
  );
  if (response) {
    for (const axes of response) {
      timeX.push(moment(axes[0]).format("MMM D"));
      priceY.push(parseFloat(axes[1]));
    }
  }
  const data = {
    labels: timeX,
    datasets: [
      {
        label: "Price",
        data: priceY,
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
  
          if (!chartArea) {
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        borderColor: "#8C54FF",
        pointBackgroundColor: "white",
        pointBorderColor: "#8C54FF",
        pointStyle: "circle",
        pointRadius: 4,
        pointBorderWidth: 2,
        borderWidth:2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [2, 2],
          borderColor: "#E0E7FF",
        },
        ticks: {
          color: "#B0BAC9",
        },
      },
      x: {
        grid: {
          borderDash: [2, 2],
          borderColor: "#E0E7FF",
        },
        ticks: {
          align: "end",
          color: "#B0BAC9",
        },
      },
    },

    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
        },
      },
    },
  };
  return (
    <div className="chart_container">
        <Line
          id="mychart"
          width="1032.69"
          height="274.24"
          data={data}
          options={options}
        />
    </div>
  );
};

export default LineChart;
