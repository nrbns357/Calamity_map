import styled from "styled-components";

export const CustomOverlayMapMarker = styled.div`
  display: flex;
  padding: 12px;
  border-radius: 4px;
  background-color: #7b9acc;
  color: #fff;
`;

export const Tail = styled.div`
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  background-color: #7b9acc;
  z-index: -1;
`;
