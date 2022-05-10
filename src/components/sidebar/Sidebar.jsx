import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { StyledLink } from "../login/Login";

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
  border: 2px solid black;
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
  border: 2px solid black;
  display: flex;
  flex-direction: column;
`;
const Logout = styled.button`
  border: none;
  background-color: transparent;
  font-size: larger;
  font-weight: 600;
`;

export const Sidebar = () => {
  const { logout, username } = useContext(AuthContext);
  const token = useSelector((state) => state.token);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    if (token) {
      fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        method: "get",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(setProfile(res));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <Container>
      <Section1>
        <h1>{profile.name}</h1>
      </Section1>
      <Section2>
        <div>
          <Box >All 4</Box>
        </div>
        <div>
          <Box>Personal 1</Box>
        </div>
        <div>
          <Box>Official 2</Box>
        </div>
        <div>
          <Box>other 1</Box>
        </div>
      </Section2>
      <Section3>
        <StyledLink to={"/"}>Summary</StyledLink>
        <StyledLink to={"/newtask"}>Add New Task</StyledLink>
      </Section3>
      <Logout onClick={logout}>Logout</Logout>
    </Container>
  );
};
