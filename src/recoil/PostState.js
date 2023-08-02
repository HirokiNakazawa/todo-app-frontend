import { atom } from "recoil";

export const postErrorMsgState = atom({
  key: "postErrorMsgState",
  default: "",
});

export const addCategoryState = atom({
  key: "addCategoryState",
  default: false,
});

export const addTodoState = atom({
  key: "addTodoState",
  default: false,
});

export const updateStatusState = atom({
  key: "updateStatusState",
  default: false,
});

export const updateTodoStatus = atom({
  key: "updateTodoState",
  default: false,
});
