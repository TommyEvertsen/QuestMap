import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const clickIcon = new Icon({
  iconUrl: typeof markerIcon === "string" ? markerIcon : markerIcon.src,
  iconRetinaUrl:
    typeof markerIconRetina === "string"
      ? markerIconRetina
      : markerIconRetina.src,
  shadowUrl: typeof markerShadow === "string" ? markerShadow : markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function PopUpMarker() {
  const [position, setPosition] = useState(null);
  useMapEvents({
    click(event) {
      setPosition(event.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={clickIcon}>
      <Popup>Test</Popup>
    </Marker>
  );
}
