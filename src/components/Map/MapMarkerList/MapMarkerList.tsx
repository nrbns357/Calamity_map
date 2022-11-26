import * as S from "./MapMarkerList.style";
import useMapLevel from "hooks/useMapLevel";
import { useState } from "react";
import { CustomOverlayMap, MapMarker, MarkerClusterer, useMap } from "react-kakao-maps-sdk";
import { Coord } from "types/util/LatLng.type";
import { useGetContent } from "query/useGetContent.query";

const MapMarkerList = ({ coord }: { coord: Coord }) => {

  const map = useMap();
  const { level } = useMapLevel(map);
  const { data } = useGetContent();

  return (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={10} // 클러스터 할 최소 지도 레벨
    >
      {data?.data && data?.data.map((item, idx) => {
        const position = {
          lat: item.lat,
          lng: item.lng
        }
        return (
          <CustomOverlayMap
            key={idx}
            position={position}
          >
            <S.CustomOverlayMapMarker
              onClick={() => {
                map.setLevel(1);
                map.panTo(new kakao.maps.LatLng(item.lat, item.lng));
              }}>
              {item.title}
              <S.Tail />
            </S.CustomOverlayMapMarker>
          </CustomOverlayMap>
        )
      })}

      {
        (
          <CustomOverlayMap
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
