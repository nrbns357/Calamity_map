import React, { useEffect, useState } from "react";
import { Coord } from "types/util/LatLng.type";

const useCurrentCoord = () => {
  const [load, setLoad] = useState(false);
  const [myCoord, setCoord] = useState<Coord>({
    lat: 36.658563176254795,
    lng: 127.86119616960151,
  });

  useEffect(() => {
    kakao.maps.load(() => {
      setLoad(true);
    });

    navigator.geolocation.getCurrentPosition((pos) => {
      setCoord((prev) => ({
        ...prev,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      }));
    });
  });

  return { load, myCoord };
};

export default useCurrentCoord;
