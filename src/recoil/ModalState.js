import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: {
    isOpen: false,
    isRegister: false,
    isLogin: false,
    title: "",
    buttonText: "",
  },
});

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const errorMsgState = atom({
  key: "errorMessageState",
  default: "",
});
