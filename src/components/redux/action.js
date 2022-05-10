export const is_Login = "is_Login";
export const Login = "Login";
export const Token="Token"

export const islogin = (payload) => ({
  type: is_Login,
  payload,
});
export const login = (payload) => ({
  type: Login,
  payload,
});
export const istoken = (payload) => ({
  type: Token,
  payload,
});
