import styled from "styled-components";

export const AddContentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: #33333370;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled.div`
  text-align: right;
  cursor: pointer;
`;

export const AddContentContainer = styled.form`
  width: 500px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  gap: 10px;
`;

export const InputWrrap = styled.div`
  display: grid;
  span {
    position: relative;
    top: 10px;
    right: -10px;
    width: 40px;
    text-align: center;
    background-color: #fff;
    font-weight: bold;
  }
  input {
    padding: 13px 10px;
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  padding: 12px;
  background-color: #7b9acc;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
`;
