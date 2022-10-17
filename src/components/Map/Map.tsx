//import {  } from "./Map.style.ts";
import { Map } from "react-kakao-maps-sdk";

const MapComponent = () => {
  return (
    <Map
      center={{ lat: 36.5, lng: 127.5 }}
      style={{ width: "100vw", height: "100vh" }}
    >
    </Map>
  );
};

export default MapComponent;
