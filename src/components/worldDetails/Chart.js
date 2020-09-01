import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
const Chart = ({ chartData }) => {
  const [data, setData] = useState({});
  console.log(chartData);
  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Coronavirus timeline stats",
    },
  };

  useEffect(() => {
    setData({
      labels: chartData.map((data) => data.date),

      datasets: [
        {
          label: "Total cases",
          data: chartData.map((data) => data.confirmed),
          borderColor: ["rgba(0, 0, 244, 1)"],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderWidth: 2,
          pointRadius: 2,
        },
        {
          label: "Active cases",
          data: chartData.map((data) => data.active),
          borderColor: ["rgba(244, 0, 244, 1)"],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderWidth: 2,
          pointRadius: 2,
        },
        {
          label: "Deaths",
          data: chartData.map((data) => data.deaths),
          borderColor: ["rgba(244, 0, 0, 1)"],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderWidth: 2,
          pointRadius: 2,
        },
        {
          label: "Recovered",
          data: chartData.map((data) => data.recovered),
          borderColor: ["rgba(0, 244, 0, 1)"],
          backgroundColor: ["rgba(0,0,0,0)"],
          borderWidth: 2,
          pointRadius: 2,
        },
      ],
    });
  }, [chartData]);

  return <Line data={data} options={options} />;
};

Chart.propTypes = {
  chartData: PropTypes.array,
};

export default Chart;
