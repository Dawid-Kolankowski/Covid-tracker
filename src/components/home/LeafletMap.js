import "leaflet/dist/leaflet.css";
import React from "react";

import { Map, TileLayer } from "react-leaflet";

const LeafletMap = () => {
  const MAP_API_KEY = process.env.MAP_API_KEY;
  const MAP_STYLE = process.env.MAP_STYLE;
  const MAPBOX_USERNAME = process.env.MAPBOX_USERNAME;

  console.log(MAP_API_KEY);
  return (
    <Map className="leaflet-map" center={[10, 10]} zoom={5}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERNAME}/${MAP_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_API_KEY}`}
        attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
      ></TileLayer>
    </Map>
  );
};

export default LeafletMap;
