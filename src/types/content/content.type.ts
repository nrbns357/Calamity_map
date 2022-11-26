import { Coord } from "types/util/LatLng.type";

export interface ContentData {
  id: number;
  title: string;
  content: string;
  lat: number;
  lng: number;
}

export interface ContentResponse {
  data: ContentData[];
}

export interface PostContent {
  title: string;
  content: string;
  myCoord: Coord;
}
