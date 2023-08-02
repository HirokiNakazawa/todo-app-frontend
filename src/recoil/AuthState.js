import { atom } from "recoil";

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});
