import { useState } from "react";
import * as S from "./ContentsBoard.style";

const ContentsBoard = () => {

  const [contentsBoardModal, setContentsBoardModal] = useState<boolean>(false);

  return (
    <>
      {
        contentsBoardModal ?
          <S.ContentsBoardModalContainer className="animate__animated animate__backInRight" onClick={() => setContentsBoardModal(false)}>
            <div>지금 종로구에서는...</div>
          </S.ContentsBoardModalContainer>
          : <S.ContentsModalBtn onClick={() => setContentsBoardModal(true)} >게시물 보기</S.ContentsModalBtn>
      }
    </>
  );
};

export default ContentsBoard;
