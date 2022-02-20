import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

import { casesTypeColors } from "../../utils";
import "./LineGraph.css";
import { fetchHistoricalData } from "../../api";

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.raw).format("+0,0");
        },
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    xAxis: {
      type: "time",
      time: {
        format: "MM-DD-YYYY",
        tooltipFormat: "ll",
      },
    },
    yAxis: {
      grid: {
        display: false,
      },
      ticks: {
        callback: function (value, index, values) {
          return numeral(value).format("0.0a");
        },
      },
    },
  },
};

const buildChartData = (data, casesType) => {
  const labels = [];
  const dailyData = [];

  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      const currData = data[casesType][date] - lastDataPoint;
      labels.push(new Date(date));
      dailyData.push(currData);
    }
    lastDataPoint = data[casesType][date];
  }

  const finalData = {
    labels,
    datasets: [
      {
        data: dailyData,
        fill: true,
        backgroundColor: casesTypeColors[casesType].half_op,
        borderColor: casesTypeColors[casesType].hex,
      },
    ],
  };

  return finalData;
};

function LineGraph({ casesType = "cases" }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchHistoricalData().then((data) => {
      const finalData = buildChartData(data, casesType);
      setData(finalData);
    });
  }, [casesType]);

  return (
    <div className="graph__container">
      {data?.labels?.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <div className="graph__info">
          <strong>
            No historical data found on number of peoples recovered daily!
          </strong>
        </div>
      )}
    </div>
  );
}

export default LineGraph;
