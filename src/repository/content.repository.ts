import { customAxios } from "lib/axios/axios";
import { ContentResponse, PostContent } from "types/content/content.type";
import { Coord } from "types/util/LatLng.type";

class contentRepository {
  public async getContentData(): Promise<ContentResponse> {
    const { data } = await customAxios.get("/map");
    return data;
  }

  public async setContent({
    title,
    content,
    myCoord,
  }: PostContent): Promise<ContentResponse> {
    const { data } = await customAxios.post("/map", {
      title: title,
      content: content,
      x: myCoord.lat,
      y: myCoord.lng,
    });
    return data;
  }
}

export default new contentRepository();
