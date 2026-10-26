import { useEffect } from "react";
import { useMapEvents } from "react-leaflet";

const LocateMeButton = () => {
  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  /* Go to my location as the app starts */
  useEffect(() => {
    map.locate();
  }, [map]);

  return (
    <button
      type="button"
      className="absolute top-3 right-3 z-[1000] cursor-pointer rounded bg-white hover:bg-gray-100 px-3 py-2 text-map-navy shadow-md"
      onClick={(event) => {
        event.stopPropagation();
        map.locate();
      }}
      onDoubleClick={(event) => event.stopPropagation()}
    >
      Center map
    </button>
  );
};

export default LocateMeButton;
