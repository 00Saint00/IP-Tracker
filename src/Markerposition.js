import { React, useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "./icon";
import "./index.css";

export default function Markerposition({ address }) {
  const position = useMemo(() => {
    return [address.location.lat, address.location.lng];
  }, [address.location.lat, address.location.lng]);
  const map = useMap();

  const popupStyle = {
    marginLeft: "-20px", // without !important
    backgroundColor: "red",
  };

  const popupContent = (
    <p className="font-semibold text-slate-900 text-large md:text-xl xl:text-2xl">
      {address.location.city}, {address.location.region}
    </p>
  );

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker icon={icon} position={position}>
        <Popup style={popupStyle} className="popupCustomStyle">
          {popupContent}
        </Popup>
      </Marker>
    </>
  );
}
