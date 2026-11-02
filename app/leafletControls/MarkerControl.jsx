"use client";

import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

export default function MarkerControl() {
  const map = useMap();

  useEffect(() => {
    const MarkerControl = L.Control.extend({
      onAdd: function () {
        const container = L.DomUtil.create("div", "leaflet-control");
        const btn = L.DomUtil.create("button", "leaflet-bar", container);
        btn.type = "button";
        btn.textContent = "Marker";
        btn.setAttribute("aria-expanded", "false");
        btn.style.fontSize = "20px";
        btn.style.padding = "4px 8px";
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = "white";

        const panel = L.DomUtil.create("div", "marker-menu", container);
        panel.hidden = true;
        panel.textContent = "Marker Menu";
        panel.style.backgroundColor = "white";
        panel.style.color = "black";
        panel.style.padding = "12px";
        panel.style.marginTop = "8px";
        panel.style.width = "200px";
        panel.style.maxWidth = "calc(100vw - 40px)";
        panel.style.boxSizing = "border-box";
        panel.style.border = "1px solid #ccc";
        panel.style.borderRadius = "4px";

        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);

        L.DomEvent.on(btn, "click", function () {
          panel.hidden = !panel.hidden;
          btn.setAttribute("aria-expanded", String(!panel.hidden));
        });

        return container;
      },
    });

    const control = new MarkerControl({ position: "bottomleft" });
    control.addTo(map);

    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
}
