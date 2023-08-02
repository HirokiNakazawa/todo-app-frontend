import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: {
    isOpen: false,
    isRegister: false,
    isLogin: false,
    isCreate: false,
    isUpdate: false,
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

export const todoIdState = atom({
  key: "todoIdState",
  default: null,
});

export const categoryState = atom({
  key: "categoryState",
  default: "",
});

export const todoState = atom({
  key: "todoState",
  default: "",
});

export const limitDateState = atom({
  key: "limitDateState",
  default: null,
});

export const errorMsgState = atom({
  key: "errorMessageState",
  default: "",
});
