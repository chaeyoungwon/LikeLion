import { atom } from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const articlesState = atom({
  key: "articlesState",
  default: [],
});
