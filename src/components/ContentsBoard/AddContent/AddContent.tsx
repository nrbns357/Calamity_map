import { addContent } from "atom/addContentModal";
import { useRecoilState } from "recoil";
import * as AddContentStyle from "./AddContent.style";
import { VscChromeClose } from "react-icons/vsc";
import useCurrentCoord from "hooks/useCurrentCoord";
import { useState } from "react";
import usePostContent from "hooks/usePostContent";

const AddContent = () => {

  const [addContentModal, setAddContentModal] = useRecoilState(addContent);
  const [contentInfo, setContentInfo] = useState<{ title: string, content: string }>({
    title: "",
    content: ""
  })
  const { setContentFuc } = usePostContent();

  return (
    <AddContentStyle.AddContentBackground>
      <AddContentStyle.AddContentContainer>
        <AddContentStyle.CloseBtn onClick={() => {
          setAddContentModal({ modalState: false });
        }}><VscChromeClose /></AddContentStyle.CloseBtn>
        <AddContentStyle.InputWrrap>
          <span>제목</span>
          <input onChange={(e) => setContentInfo({ ...contentInfo, title: e.target.value })} type="text" name="" id="" />
        </AddContentStyle.InputWrrap>
        <AddContentStyle.InputWrrap>
          <span>내용</span>
          <input onChange={(e) => setContentInfo({ ...contentInfo, content: e.target.value })} type="text" name="" id="" />
        </AddContentStyle.InputWrrap>
        <AddContentStyle.SubmitBtn onClick={() => {
          setContentFuc(contentInfo);
          setAddContentModal({ modalState: false });
        }}>등록하기</AddContentStyle.SubmitBtn>
      </AddContentStyle.AddContentContainer>
    </AddContentStyle.AddContentBackground >
  );
};

export default AddContent;
