import { atom } from "recoil";

export const todoIdState = atom({
  key: "todoIdState",
  default: null,
});

export const mainCategoryState = atom({
  key: "mainCategoryState",
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
