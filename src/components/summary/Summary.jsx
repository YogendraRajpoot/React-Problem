import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { loadData } from "../../utils/localStorage";
import { Sidebar } from "../sidebar/Sidebar";

export const Main = styled.div`
  width: 100%;
  display: flex;
  min-height: 927px;
  background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
`;
export const LeftBar = styled.div`
  margin-top: 2%;
  width: 20%;
  height: 20vw;
  background-color: transparent;
  box-shadow: 5px 10px 8px 10px #141414;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2%;
  position: fixed;
  left: 2%;
`;
export const RightBar = styled.div`
  background-color: transparent;
  box-shadow: 5px 10px 8px 10px #141414;
  min-height: 800px;
  //   display: flex;
  //   flex-direction: column;
  align-items: center;
  width: 65%;
  border-radius: 2%;
  margin-top: 2%;
  // position: fixed;
  margin-left: 30%;
  
`;

export const Summary = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  let done = loadData("done")
  let inprogress = loadData("inprogress")
  let todo = loadData("todo")
  console.log("43", isLogin);
  console.log("50",loadData("code%%4"));
  if (loadData("code%%4") === null) {
    console.log("50",loadData("code%%4"));
    return <Navigate to="/login" />;
  }
  return (
    <Main>
      <LeftBar>
        <Sidebar />
      </LeftBar>
      <RightBar>
        <div>
          <h1>Summary</h1>
        </div>
        <div>
          <p>Todo {todo}</p>
          <p>Done {done}</p>
          <p>In Progress {inprogress}</p>
        </div>
      </RightBar>
    </Main>
  );
};
