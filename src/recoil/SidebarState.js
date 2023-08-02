import { atom } from "recoil";

export const sidebarState = atom({
  key: "sidebarState",
  default: {
    errorMsg: "",
  },
});

export const sidebarCategoryState = atom({
  key: "sidebarCategoryState",
  default: "",
});
