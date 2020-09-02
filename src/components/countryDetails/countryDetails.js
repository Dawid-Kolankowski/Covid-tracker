import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchCountryTimelineData } from "../../api";
import Chart from "./Chart";

const countryDetails = () => {
  const history = useHistory();
  const location = useLocation();

  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setTimelineData(
        await fetchCountryTimelineData(location.state.country.countryInfo.iso2)
      );
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
          <div className="world__cards-number">
            {location.state.country.active}
          </div>

          <div>Active</div>
        </div>
        <div>
          <div className="world__cards-number">
            {location.state.country.cases}
          </div>
          <div>All cases</div>
        </div>
        <div>
          <div className="world__cards-number">
            {location.state.country.critical}
          </div>
          <div>Critical condition</div>
        </div>
        <div>
          {" "}
          <div className="world__cards-number">
            {location.state.country.deaths}
          </div>
          <div>Deaths</div>
        </div>
        <div>
          <div className="world__cards-number">
            {location.state.country.todayRecovered}
          </div>
          Today recovered
        </div>
        <div>
          {" "}
          <div className="world__cards-number">
            {location.state.country.tests}
          </div>
          <div>Total tests taken</div>
        </div>
        <div>
          <div className="world__cards-number">
            {location.state.country.todayCases}
          </div>
          <div>Today cases</div>
        </div>
        <div>
          <div className="world__cards-number">
            {location.state.country.todayDeaths}
          </div>
          <div>Today deaths</div>
        </div>
        <div>
          <div className="world__cards-number">
            {location.state.country.todayRecovered}
          </div>
          <div>Today recovered</div>
        </div>
      </div>
      <div className="world__container-graph">
        {" "}
        <Chart chartData={timelineData} />{" "}
      </div>
    </div>
  );
};

export default countryDetails;
