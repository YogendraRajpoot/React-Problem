import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "../sidebar/Sidebar";

export const Main = styled.div`
  width: 100%;
  display: flex;
  height: 927px;
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
  height: 42vw;
  //   display: flex;
  //   flex-direction: column;
  align-items: center;
  width: 65%;
  border-radius: 2%;
  margin-top: 2%;
  position: fixed;
  margin-left: 30%;
`;

export const Summary = () => {
  const isLogin = useSelector((state) => state.isLogin);
  if (!isLogin) {
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
          <p>Todo</p>
          <p>Done</p>
          <p>In Progress</p>
        </div>
      </RightBar>
    </Main>
  );
};
