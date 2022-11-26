import { useState, useEffect } from "react";
import * as ContentsBoardStyle from "./ContentsBoard.style";
import { BiX, BiPlus } from "react-icons/bi";
import AddContent from "./AddContent";
import { addContent } from "atom/addContentModal";
import { useRecoilState, useRecoilValue } from "recoil";
import { useGetContent } from "query/useGetContent.query";
import { useMap } from "react-kakao-maps-sdk";

const ContentsBoard = () => {

  const map = useMap();
  const [contentsBoardModal, setContentsBoardModal] = useState<boolean>(false);
  const [addContentModal, setAddContentModal] = useRecoilState(addContent);
  const { data } = useGetContent();
  const { modalState } = useRecoilValue(addContent);

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
              {data?.data ? data?.data.map((item, idx) => {
                return (
                  <ContentsBoardStyle.ContentWrap key={idx} onClick={() => {
                    map.setLevel(1);
                    map.panTo(new kakao.maps.LatLng(item.lat, item.lng));
                  }}>
                    <ContentsBoardStyle.Title>{item.title}</ContentsBoardStyle.Title>
                    <ContentsBoardStyle.Content>{item.content}</ContentsBoardStyle.Content>
                  </ContentsBoardStyle.ContentWrap>
                )
              }) : <div>게시물이 없습니다</div>}
              <ContentsBoardStyle.AddContent onClick={() => {
                setAddContentModal({ modalState: true })
                console.log(modalState)
              }}><BiPlus /></ContentsBoardStyle.AddContent>
            </ContentsBoardStyle.BoardContentListContainer>

          </ContentsBoardStyle.ContentsBoardModalContainer>
          : <ContentsBoardStyle.ContentsModalBtn onClick={() => setContentsBoardModal(true)} >게시물 보기</ContentsBoardStyle.ContentsModalBtn>
      }
      {modalState && <AddContent />}
    </>
  );
};

export default ContentsBoard;
