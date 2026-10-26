"use client";

import { useState } from "react";

export default function MarkerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {!isOpen && (
        <div className="marker-menu-closed-wrapper">
          <div className="marker-menu-closed">Marker Menu</div>
        </div>
      )}
      {isOpen && (
        <div className="marker-menu-open-wrapper">
          <div className="marker-menu-open">Marker Menu</div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"} Marker Menu
      </button>
    </div>
  );
}
