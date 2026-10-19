"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Components/map"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="mapContainer h-full w-full bg-red">
      <Map />;
    </div>
  );
}
