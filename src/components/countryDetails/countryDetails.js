import React from "react";
import { useParams } from "react-router-dom";

const countryDetails = () => {
  let { country } = useParams();

  return <div>{country}</div>;
};

export default countryDetails;
