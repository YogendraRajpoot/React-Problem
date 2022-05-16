import { is_Login, Login, Token, User_Name } from "./action";

export const ReducerK = (store, action) => {
  switch (action.type) {
    case is_Login:
      return {
        ...store,
        isLogin: action.payload,
      };
    case Login:
      return {
        ...store,
        user: { ...action.payload },
      };
    case Token:
      return {
        ...store,
        token: action.payload,
      };
    case User_Name:
      return {
        ...store,
        username: action.payload,
      };

    default:
      return store;
  }
};
