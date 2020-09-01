import React from "react";
import { CircleMarker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";

const CircleMarkers = ({ markerData }) => {
  let history = useHistory();

  const calculateRadius = (cases) => {
    if (cases < 400000) {
      return 10 + cases / 15000;
    } else return 10 + cases / 150000;
  };

  return markerData.map((country) => {
    return (
      <CircleMarker
        key={country.country}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        radius={calculateRadius(country.cases)}
        color="red"
        onMouseOver={(e) => {
          e.target.setStyle({ color: "green" });
          e.target.openPopup();
        }}
        onMouseOut={(e) => {
          e.target.closePopup();
          e.target.setStyle({ color: "red" });
        }}
        onclick={() => {
          history.push(`/details/${country.country}`);
        }}
      >
        <Popup>
          <img
            src={country.countryInfo.flag}
            className="leaflet-map-popup-flag"
          />
          <div className="leaflet-map-popup">
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
          </div>
        </Popup>
      </CircleMarker>
    );
  });
};

export default CircleMarkers;
