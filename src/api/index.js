import axios from "axios";

const url = "https://corona.lmao.ninja/v3/covid-19";

export const fetchCovidDataByCountry = async () => {
  let countryUrl = `${url}/countries`;

  try {
    const { data } = await axios.get(countryUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGlobalData = async () => {
  let globalUrl = `${url}/all`;

  try {
    const { data } = await axios.get(globalUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchWorldTimelineData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get("https://corona-api.com/timeline");

    const transformData = data.map((daily) => ({
      active: daily.active,
      confirmed: daily.confirmed,
      deaths: daily.deaths,
      date: daily.date,
      recovered: daily.recovered,
    }));

    return transformData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryTimelineData = async (countryISO2) => {
  try {
    const {
      data: { timeline },
    } = await axios.get(`${url}/historical/${countryISO2}?lastdays=all`);

    const transformData = Object.keys(timeline.cases).map((key) => ({
      date: key,
      cases: timeline.cases[key],
      recovered: timeline.recovered[key],
      deaths: timeline.deaths[key],
    }));

    return transformData;
  } catch (error) {
    console.log(error);
  }
};
