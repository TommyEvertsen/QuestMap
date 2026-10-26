"use client";

import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import LocateMeButton from "./locateMeButton";
import PopUpMarker from "./PopUpMarker";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocateMeButton />
      <PopUpMarker />
     
    </MapContainer>
  );
}
