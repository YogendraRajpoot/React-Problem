import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { islogin, } from "./redux/action";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const login = (token, username) => {
    if (token !== undefined) {
      console.log("token", token);
      // localStorage.setItem("code%%4", token);
      setUserName(username);
      dispatch(islogin(true));
      navigate(`/`);
    }
  };
  // localStorage.getItem("code%%4");
  // localStorage.removeItem("Token");
  const logout = () => {
    dispatch(islogin(true));
  };

  return (
    <AuthContext.Provider value={{ login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};
