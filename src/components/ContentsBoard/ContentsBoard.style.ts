import styled from "styled-components";

export const ContentsModalBtn = styled.div`
  width: 150px;
  height: 40px;
  background-color: #fff;
  border-radius: 10px;
  position: fixed;
  right: 40px;
  top: 100px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 15%) 0px 3px 10px 0px;
  font-weight: bold;
`;

export const ContentsBoardModalContainer = styled.div`
  width: 500px;
  height: 500px;
  position: fixed;
  right: 40px;
  top: 100px;
  border-radius: 5px;
  background-color: #fff;
  z-index: 10;
  padding: 30px;
  box-shadow: rgb(0 0 0 / 15%) 0px 3px 10px 0px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const BoardContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  overflow: auto;
  padding-bottom: 10px;
`;

export const ContentWrap = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px 3px;
  margin: 10px;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Content = styled.div``;

export const AddContent = styled.div`
  position: absolute;
  right: 60px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  background-color: #7b9acc;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
