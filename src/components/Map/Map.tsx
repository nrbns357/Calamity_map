import * as S from "./Map.style";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ContentsBoard from "../ContentsBoard";

interface gpsT {
  lat: number;
  lng: number;
}

const MapComponent = () => {
  const [load, setLoad] = useState(false);
  const [myGPS, setMyGPS] = useState<gpsT>({
    lat: 36.658563176254795,
    lng: 127.86119616960151,
  });
  useEffect(() => {
    kakao.maps.load(function () {
      setLoad(true);
    });
    navigator.geolocation.getCurrentPosition((pos) => {
      setMyGPS((prev) => ({
        ...prev,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      }));
    });
  }, []);

  return (
    <S.MapContainer>
      {load && (
        <Map
          center={{ lat: myGPS.lat, lng: myGPS.lng }}
          style={{ width: "100%", height: "100%" }}
          level={3}
        >
          <MapMarker position={myGPS} />
          <ContentsBoard />
        </Map>
      )}
    </S.MapContainer>
  );
};


export default MapComponent;
