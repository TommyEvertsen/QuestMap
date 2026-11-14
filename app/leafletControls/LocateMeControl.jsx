"use client";

import { useEffect, useRef } from "react";
import { DomEvent } from "leaflet";
import { useMap } from "react-leaflet";

export default function LocateMeControl() {
  const map = useMap();
  const controlRef = useRef(null);

  useEffect(() => {
    const control = controlRef.current;
    if (control) {
      DomEvent.disableClickPropagation(control);
      DomEvent.disableScrollPropagation(control);
    }
  }, []);

  const handleLocate = () => {
    map.locate({
      setView: true,
      maxZoom: 16,
    });
  };

  return (
    <button
      ref={controlRef}
      type="button"
      onClick={handleLocate}
      className="absolute right-4 top-4 z-[1000] rounded bg-white px-3 py-2 text-xl shadow hover:bg-gray-100 cursor-pointer"
      aria-label="Locate me"
      title="Locate me"
    >
      📍
    </button>
  );
}
