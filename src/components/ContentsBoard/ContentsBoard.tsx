import { useState } from "react";
import * as ContentsBoardStyle from "./ContentsBoard.style";
import { BiX, BiPlus } from "react-icons/bi";
import useData from "hooks/useData";

const ContentsBoard = () => {

  const [contentsBoardModal, setContentsBoardModal] = useState<boolean>(false);
  const { boardArray } = useData();

  return (
    <>
      {
        contentsBoardModal ?
          <ContentsBoardStyle.ContentsBoardModalContainer className="animate__animated animate__backInRight">
            <ContentsBoardStyle.ContentHeader>
              <div style={{ display: "flex", gap: "7px", fontSize: "1.5rem" }}>지금 <div style={{ fontWeight: "bold" }}>당신 근처</div> 에서는...</div>
              <BiX style={{ cursor: "pointer", fontSize: "1.3rem" }} onClick={() => setContentsBoardModal(false)} />
            </ContentsBoardStyle.ContentHeader>

            <ContentsBoardStyle.BoardContentListContainer>
              {boardArray.map((item, idx) => {
                return (
                  <ContentsBoardStyle.ContentWrap key={idx}>
                    <ContentsBoardStyle.Title>{item.title}</ContentsBoardStyle.Title>
                    <ContentsBoardStyle.Content>{item.content}</ContentsBoardStyle.Content>
                  </ContentsBoardStyle.ContentWrap>
                )
              })}
              <ContentsBoardStyle.AddContent><BiPlus></BiPlus></ContentsBoardStyle.AddContent>
            </ContentsBoardStyle.BoardContentListContainer>

          </ContentsBoardStyle.ContentsBoardModalContainer>
          : <ContentsBoardStyle.ContentsModalBtn onClick={() => setContentsBoardModal(true)} >게시물 보기</ContentsBoardStyle.ContentsModalBtn>
      }
    </>
  );
};

export default ContentsBoard;
