import { createStore } from "redux";
import { ReducerK } from "./reducer";

export const store = createStore(ReducerK, {
  user: {},
  isLogin: false,
  token: "",
  username:"",
});
