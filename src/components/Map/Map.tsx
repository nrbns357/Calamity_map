import * as S from "./Map.style";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ContentsBoard from "../ContentsBoard";
import MapMarkerList from "./MapMarkerList";
import useCurrentCoord from "hooks/useCurrentCoord";

const MapComponent = () => {

  const { load, myCoord } = useCurrentCoord();

  return (
    <S.MapContainer>
      {load && (
        <Map
          center={{ lat: myCoord.lat, lng: myCoord.lng }}
          style={{ width: "100%", height: "100%" }}
          level={3}
        >
          <MapMarkerList coord={myCoord} />
          <ContentsBoard />
        </Map>
      )}
    </S.MapContainer>
  );
};


export default MapComponent;
