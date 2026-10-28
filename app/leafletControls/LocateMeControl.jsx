"use client";

import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

export default function LocateMeControl() {
  const map = useMap();

  useEffect(() => {
    const LocateControl = L.Control.extend({
      onAdd: function () {
        const btn = L.DomUtil.create("button", "leaflet-bar leaflet-control");
        btn.innerHTML = "📍";
        btn.style.fontSize = "20px";
        btn.style.padding = "4px 8px";
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = "white";

        L.DomEvent.on(btn, "click", function (e) {
          L.DomEvent.stopPropagation(e);
          map.locate({ setView: true, maxZoom: 16 });
        });

        return btn;
      },
    });

    const control = new LocateControl({ position: "topright" });
    control.addTo(map);

    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
}
