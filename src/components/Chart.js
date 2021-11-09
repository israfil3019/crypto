import React from "react";
import { Line } from "react-chartjs-2";
import { useFetch } from "../hooks/useFetch";
import moment from "moment";

const LineChart = () => {
  let timeX = [];
  let priceY = [];

  const { response } = useFetch(
    `https://api.binance.com/api/v3/klines?interval=1w&symbol=BTCUSDT&limit=14`
  );
  if (response) {
    for (const axes of response) {
      timeX.push( moment(axes[0]).format("MMM D"));
      priceY.push(parseFloat(axes[1]));
    }
  }
  const data = {
    labels:timeX,
    datasets: [
      {
        label: "Price",
        data: priceY,
        fill: true,
        backgroundColor: "rgba(141,86,255,0.1)",
        borderColor: "#935EFF",
        pointBackgroundColor: "white",
        pointBorderColor: "#935EFF",
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        // beginAtZero: true,
        grid: {
          borderDash: [2, 2],
          borderColor: "#B0BAC9",
        },
      },
      x: {
        grid: {
          borderDash: [2, 2],
          borderColor: "#B0BAC9",
        },
        ticks: {
          align: "end",
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
    <div className='chart_container'>
      <Line className="chart" data={data} options={options} />
    </div>
  );
};

export default LineChart;
