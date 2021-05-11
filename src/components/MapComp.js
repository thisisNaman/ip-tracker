import React from "react";
import { MapContainer, Marker,TileLayer } from "react-leaflet";

const MapComp = ({ latitude, longitude }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vw",
      }}
    >
      <MapContainer center={[latitude, longitude]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
};

export default MapComp;
