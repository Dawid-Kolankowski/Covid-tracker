import React from "react";
import { CircleMarker, Popup } from "react-leaflet";

const CircleMarkers = ({ markerData }) => {
  return markerData.map((country) => {
    return (
      <CircleMarker
        key={country.country}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        color="red"
        radius={20}
        onMouseOver={(e) => {
          e.target.openPopup();
        }}
        onMouseOut={(e) => {
          e.target.closePopup();
        }}
      >
        <Popup>
          <img src={country.countryInfo.flag} className="flag" />
          {country.country}
          <br />
          All cases: <strong>{country.cases}</strong>
          <br />
          Active cases:
          <strong>{country.active}</strong>
          <br />
          Deaths:
          <strong>{country.deaths}</strong>
          <br />
        </Popup>
      </CircleMarker>
    );
  });
};

export default CircleMarkers;
