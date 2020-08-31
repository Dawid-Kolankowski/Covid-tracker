import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { Map, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { fetchCovidDataByCountry } from "../../api";
import CircleMarkers from "./CircleMarkers";
const LeafletMap = () => {
  const MAP_API_KEY = process.env.MAP_API_KEY;
  const MAP_STYLE = process.env.MAP_STYLE;
  const MAPBOX_USERNAME = process.env.MAPBOX_USERNAME;
  const [markerData, setMarkerData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setMarkerData(await fetchCovidDataByCountry());
    };
    fetchAPI();
  }, []);
  console.log(markerData);
  return (
    <Map className="leaflet-map" center={[52, 20]} zoom={5}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERNAME}/${MAP_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_API_KEY}`}
        attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
      ></TileLayer>
      {markerData.length > 0 ? <CircleMarkers markerData={markerData} /> : null}
    </Map>
  );
};

export default LeafletMap;
