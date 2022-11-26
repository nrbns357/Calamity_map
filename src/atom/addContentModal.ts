import { atom } from "recoil";

export const addContent = atom({
  key: "ADDCONTENT",
  default: {
    modalState: false,
  },
});
