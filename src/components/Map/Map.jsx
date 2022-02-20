import React from "react";
import { Card } from "@mui/material";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import { showDataOnMap } from "../../utils";
import "./Map.css";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <Card className="map">
      <MapContainer center={center} zoom={zoom} zoomControl centerControl>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </Card>
  );
};

export default Map;
