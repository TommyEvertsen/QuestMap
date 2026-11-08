"use client";

import { useEffect, useRef, useState } from "react";
import { DomEvent } from "leaflet";

export default function MarkerControl() {
  const [menuOpen, setMenuOpen] = useState(false);
  const controlRef = useRef(null);

  useEffect(() => {
    const control = controlRef.current;
    if (!control) return;

    DomEvent.disableClickPropagation(control);
    DomEvent.disableScrollPropagation(control);
  }, []);

  return (
    <div
      ref={controlRef}
      className="absolute bottom-4 left-4 z-[1000]"
    >
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        className="rounded bg-white px-3 py-2 text-xl shadow"
      >
        Markers
      </button>

      {menuOpen && (
        <div className="mt-2 w-[200px] max-w-[calc(100vw-40px)] rounded border bg-white p-3 text-black shadow">
          Marker Menu
        </div>
      )}
    </div>
  );
}
