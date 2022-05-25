import { saveData } from "../../utils/localStorage";

export const is_Login = "is_Login";
export const Login = "Login";
export const Token = "Token"
export const User_Name = "UserName"
export const Login_User = "Login_User"


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
export const userName = (payload) => ({
  type: User_Name,
  payload,
});
export const logOut = () => (dispatch) => {
  // if (payload) {
    dispatch(islogin(false));
    dispatch(istoken(""));
    dispatch(userName(""));
    // dispatch(user({}));
    localStorage.removeItem("code%%4_name");
    localStorage.removeItem("code%%4_tkn");
    localStorage.removeItem("code%%4");
  // }
}

export const loginUser = (payload) => (dispatch) => {
  const form = payload
  fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
    method: "post",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      // if (res.token === undefined) {
      //   alert("credential are wrong.. please try again")
      //   console.error("Wrong Username And Password ")
      //   setForm({
      //     username: "",
      //     password: "",
      //   })
      // }
      if (res.token !== undefined) {
        console.log(res.token);
        // saveData("code%%4", res.token)
        saveData("code%%4_name", form.username)
        saveData("code%%4_tkn", res.token)
        saveData("code%%4", true)
        dispatch(istoken(res.token));
        // dispatch(userName(form.username));
        dispatch(islogin(true));
        dispatch(loginUserDetail())
      }
      // login(res.token, username);
      // dispatch(istoken("123456789"));
      // login("123456789", "username");
      // console.log(username);
    })
  // .catch((err) => console.log(err));

};

export const loginUserDetail = () => (dispatch) => {
  let username = localStorage.getItem("code%%4_name").replace(/['"]+/g, '');
  let token = localStorage.getItem("code%%4_tkn").replace(/['"]+/g, '');
  if (token) {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
      method: "get",
      headers: { "Authorization": `Bearer ` + token },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("76", res.username);
        dispatch(userName(res.username));
      })
      .catch((err) => console.log(err));
  }


}
