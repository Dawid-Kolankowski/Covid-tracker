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
