import { atom } from "recoil";

export const addCategoryState = atom({
  key: "addCategoryState",
  default: false,
});

export const addTodoState = atom({
  key: "addTodoState",
  default: false,
});
