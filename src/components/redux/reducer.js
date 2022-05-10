import { is_Login, Login, Token } from "./action";

export const ReducerK = (
  store = { user: {}, isLogin: false, Token: "" },
  action
) => {
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
        token: { ...action.payload },
      };

    default:
      return store;
  }
};
