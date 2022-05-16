import React, { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { LeftBar, Main, RightBar } from "../summary/Summary";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-weight: 1000;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 10px 8px 10px #888888;
`;

export const Home = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`https://fake-json-todo.herokuapp.com/todo`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("15", res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Main>
      {/* {console.log("35", data)} */}
      <LeftBar>
        <Sidebar />
      </LeftBar>
      <RightBar>
        {data.map((i) => {
          // console.log("43", i);
          return (
            <Card key={i.id}>
              <br />
              <h3>{i.title}</h3>
              <p>{i.description}</p>
              <p>{i.date}</p>
              <p>{i.progress}</p>
              <p>{i.task}</p>
              <br />
            </Card>
          );
        })}
      </RightBar>
    </Main>
  );
};
