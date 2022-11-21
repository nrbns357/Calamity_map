import * as S from "./MapMarkerList.style";
import useMapLevel from "hooks/useMapLevel";
import { useState } from "react";
import { CustomOverlayMap, MapMarker, MarkerClusterer, useMap } from "react-kakao-maps-sdk";
import { Coord } from "types/util/LatLng.type";

const MapMarkerList = ({ coord }: { coord: Coord }) => {

  const map = useMap();
  const { level } = useMapLevel(map);

  return (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={10} // 클러스터 할 최소 지도 레벨
    >
      {
        (
          <CustomOverlayMap
            // key={idx}
            position={coord}
          >
            <S.CustomOverlayMapMarker
              onClick={() => {
                map.setLevel(3);
                map.panTo(new kakao.maps.LatLng(coord.lat, coord.lng))
              }}>
              내 위치
              <S.Tail />
            </S.CustomOverlayMapMarker>
          </CustomOverlayMap>
        )
      }
    </MarkerClusterer>
  );
};

export default MapMarkerList;
