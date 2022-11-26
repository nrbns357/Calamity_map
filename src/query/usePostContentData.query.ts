import useCurrentCoord from "hooks/useCurrentCoord";
import { useMutation } from "react-query";
import contentRepository from "repository/content.repository";
import { PostContent } from "types/content/content.type";

export const usePostContentData = () => {
  const usePostContentMutation = useMutation(
    ({ title, content, myCoord }: PostContent) =>
      contentRepository.setContent({ title, content, myCoord })
  );
  return { usePostContentMutation };
};
