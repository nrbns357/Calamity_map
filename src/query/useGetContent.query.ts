import { useQuery } from "react-query";
import contentRepository from "repository/content.repository";

export const useGetContent = () =>
  useQuery("useGetContent", () => contentRepository.getContentData(), {
    cacheTime: 1,
    staleTime: 1,
  });
