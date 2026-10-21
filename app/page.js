"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Components/map"), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="min-h-0 w-full flex-1">
      <Map />
    </main>
  );
}
