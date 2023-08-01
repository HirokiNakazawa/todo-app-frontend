import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    id: null,
    name: "",
  },
});

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const categoriesState = atom({
  key: "categoriesState",
  default: [],
});

export const todosState = atom({
  key: "todosState",
  default: [],
});
