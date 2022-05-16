import { createContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { islogin, userName } from "./redux/action";
// const data = require("../db.json");

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // useEffect(() => {
  //   console.log("11", data.todo);
  //   let count = 0;
  //   data.todo.map((i) => {
  //     console.log("14", i);
  //   });
  // }, []);

  const dispatch = useDispatch();
  // const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const login = (token, username) => {
    if (token !== undefined) {
      console.log("24 username",username);
      console.log("25 token", token,username);
      localStorage.setItem("code%%4", token);
      localStorage.setItem("code%%4_name", username);
      dispatch(userName (username));
      // setUserName(username);
      dispatch(islogin(true));
      navigate(`/`);
    }
  };
  // localStorage.getItem("code%%4");
  const logout = () => {
    localStorage.removeItem("code%%4");
    localStorage.removeItem("code%%4_name");
    dispatch(islogin(true));
    navigate(`/login`);
  };

  return (
    <AuthContext.Provider value={{ login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
