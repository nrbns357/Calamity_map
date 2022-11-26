import { usePostContentData } from "query/usePostContentData.query";
import useCurrentCoord from "./useCurrentCoord";
import { useQueryClient } from "react-query";

const usePostContent = () => {
  const { myCoord } = useCurrentCoord();
  const { usePostContentMutation } = usePostContentData();
  const queryClient = useQueryClient();

  const setContentFuc = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    usePostContentMutation.mutateAsync(
      { title: title, content: content, myCoord: myCoord },
      {
        onSuccess: () => {
          window.alert("등록성공");
          queryClient.invalidateQueries("useGetContent", {
            refetchInactive: true,
          });
        },
        onError: () => {
          window.alert("등록실패");
        },
      }
    );
  };
  return { setContentFuc };
};

export default usePostContent;
