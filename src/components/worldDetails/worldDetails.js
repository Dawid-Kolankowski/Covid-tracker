import React, { useEffect, useState } from "react";
import { fetchGlobalData, fetchWorldTimelineData } from "../../api";
import Chart from "./Chart";
import "./worldDetails.css";

const worldDetails = () => {
  const [worldData, setWorldData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setWorldData(await fetchGlobalData());
      setChartData(await fetchWorldTimelineData());
    };
    fetchAPI();
  }, []);

  return (
    <div className="world__container">
      <button className="world__button">X</button>
      <div className="world__cards-container">
        <div>
          {" "}
          {worldData.active}
          <br />
          Active
        </div>
        <div>
          {worldData.cases} <br />
          All cases
        </div>
        <div>
          {worldData.critical} <br />
          Critical condition
        </div>
        <div>
          {" "}
          {worldData.deaths} <br />
          Deaths
        </div>
        <div>
          {worldData.recovered} <br />
          Today recovered
        </div>
        <div>
          {" "}
          {worldData.tests} <br />
          Total tests taken
        </div>
        <div>
          {worldData.todayCases} <br />
          Today cases
        </div>
        <div>
          {" "}
          {worldData.todayDeaths} <br />
          Today deaths
        </div>
        <div>
          {worldData.todayRecovered} <br />
          Today recovered
        </div>
      </div>
      <Chart chartData={chartData.reverse()} />
    </div>
  );
};

export default worldDetails;
