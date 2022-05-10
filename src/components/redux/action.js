export const is_Login = "IS_LOGIN";
export const Login = "LOGIN";
export const Token="Token"

export const islogin = (payload) => ({
  type: is_Login,
  payload,
});
export const login = (payload) => ({
  type: Login,
  payload,
});
export const token = (payload) => ({
  type: Token,
  payload,
});
