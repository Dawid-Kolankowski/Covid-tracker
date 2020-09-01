import React from "react";
import LeafletMap from "./LeafletMap";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  let history = useHistory();
  return (
    <>
      <button
        className="map-world-button"
        onClick={() => {
          history.push("/details/world");
        }}
      >
        World stats
      </button>
      <LeafletMap />
    </>
  );
};

export default HomePage;
