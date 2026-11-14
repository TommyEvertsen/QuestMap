"use client";

import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

export default function StartCurrentLocation() {
  const map = useMap();
  const hasLocatedOnMount = useRef(false);

  useEffect(() => {
    if (hasLocatedOnMount.current) return;
    hasLocatedOnMount.current = true;

    map.locate({
      setView: true,
      maxZoom: 16,
    });
  }, [map]);

  return null;
}