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
    errorMsg: "",
  },
});
