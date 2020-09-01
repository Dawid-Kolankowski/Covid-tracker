import React, { useEffect, useState } from "react";
import { fetchGlobalData, fetchWorldTimelineData } from "../../api";
import Chart from "./Chart";
import "./worldDetails.css";
import { useHistory } from "react-router-dom";

const worldDetails = () => {
  const [worldData, setWorldData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchAPI = async () => {
      setWorldData(await fetchGlobalData());
      setChartData(await fetchWorldTimelineData());
    };
    fetchAPI();
  }, []);

  return (
    <div className="world__container">
      <div className="world__container-button">
        <button
          className="world__button"
          onClick={() => {
            history.push("/");
          }}
        >
          X
        </button>
      </div>

      <div className="world__container-cards">
        <div>
          <div className="world__cards-number">{worldData.active}</div>

          <div>Active</div>
        </div>
        <div>
          <div className="world__cards-number">{worldData.cases}</div>
          <div>All cases</div>
        </div>
        <div>
          <div className="world__cards-number">{worldData.critical}</div>
          <div>Critical condition</div>
        </div>
        <div>
          {" "}
          <div className="world__cards-number">{worldData.deaths}</div>
          <div>Deaths</div>
        </div>
        <div>
          <div className="world__cards-number">{worldData.recovered}</div>
          Today recovered
        </div>
        <div>
          {" "}
          <div className="world__cards-number">{worldData.tests}</div>
          <div>Total tests taken</div>
        </div>
        <div>
          <div className="world__cards-number">{worldData.todayCases}</div>
          <div>Today cases</div>
        </div>
        <div>
          <div className="world__cards-number">{worldData.todayDeaths}</div>
          <div>Today deaths</div>
        </div>
        <div>
          <div className="world__cards-number">{worldData.todayRecovered}</div>
          <div>Today recovered</div>
        </div>
      </div>

      <div className="world__container-graph">
        <Chart chartData={chartData.reverse()} />
      </div>
    </div>
  );
};

export default worldDetails;
