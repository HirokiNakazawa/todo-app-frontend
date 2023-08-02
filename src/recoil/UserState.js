import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    id: null,
    name: "",
    isLoggedin: false,
  },
});

export const userCategoriesState = atom({
  key: "userCategoriesState",
  default: [],
});

export const userTodosState = atom({
  key: "userTodosState",
  default: [],
});

export const currentCategoryState = atom({
  key: "currentCategoryState",
  default: {
    id: null,
    name: "全て",
  },
});
