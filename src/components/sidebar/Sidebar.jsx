import React from "react";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { AuthContext } from "../AuthContext";
import { StyledLink } from "../login/Login";
import { loadData } from "../../utils/localStorage";
import {  logOut } from "../../redux/auth/action";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  // background-color: transparent;
  // background-color: red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
`;
const Section1 = styled.div`
  height: 20vh;
  border: 2px solid black;
`;
const Section2 = styled.div`
  height: 30vh;
  // border: 2px solid black;
  display: flex;
  font-size: large;
  font-weight: 1000;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Box = styled.div`
  border: 2px solid black;
  width: 80%;
  height: 5vh;
  margin-left: auto;
  margin-right: auto;
  .all {
    background-color: blue;
  }
`;
const Section3 = styled.div`
  height: auto;
  // border: 2px solid black;
  display: flex;
  flex-direction: column;
`;
const Logout = styled.button`
  border: none;
  background-color: transparent;
  font-size: larger;
  font-weight: 600;
  cursor: pointer;
`;

export const Sidebar = () => {
  // const countP = useSelector((state) => state.todo.countp);
  // const countOf = useSelector((state) => state.todo.countof);
  // const countOt = useSelector((state) => state.todo.countot);
  // const total = useSelector((state) => state.todo.total);
  const total=loadData("total")
  const countOt=loadData("countOT")
  const countOf=loadData("countOF")
  const countP=loadData("countP")
  console.log("68",countP,countOf,countOt,total);
  let username = loadData("code%%4_name")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // let username = localStorage.getItem("code%%4_name").replace(/['"]+/g, '');
  // let token = localStorage.getItem("code%%4_tkn").replace(/['"]+/g, '');
  // if (localStorage.getItem("code%%4_name") !== null) {
  //   username = localStorage.getItem("code%%4_name");
  // }
  // const { logout } = useContext(AuthContext);
  // const token = useSelector((state) => state.auth.token);
  // console.log("62",token);
  // console.log("63",username);
  // let username = useSelector((state) => state.auth.username);
  // const [profile, setProfile] = useState({});
  // useEffect(() => {
  //   if (token) {
  //     console.log("63");
  //     fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
  //       method: "get",
  //       headers: { "Authorization": `Bearer `+ token },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log("75",res);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [username]);
const logout=()=>{
  dispatch(logOut())
  console.log("90");
  navigate(`/login`)
}

  return (
    <Container>
      <Section1>
        <h1>{username}</h1>
      </Section1>
      <Section3>
        <StyledLink to={"/home"}>Home</StyledLink>
        <StyledLink to={"/"}>Summary</StyledLink>
        <StyledLink to={"/newtask"}>Add New Task</StyledLink>
      </Section3>
      <Section2>
        <div>
          <Box>All {total} </Box>
        </div>
        <div>
          <Box>Personal {countP} </Box>
        </div>
        <div>
          <Box>Official {countOf}</Box>
        </div>
        <div>
          <Box>Other {countOt} </Box>
        </div>
      </Section2>
      <Logout onClick={logout}>Logout</Logout>
    </Container>
  );
};
