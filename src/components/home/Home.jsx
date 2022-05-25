import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { LeftBar, Main, RightBar } from "../summary/Summary";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import { todoList } from "../../redux/todo/action";
import { loadData } from "../../utils/localStorage";
import { Navigate } from "react-router-dom";

const Card = styled.div`
  border: 1px solid black;
  border:2px solid black;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-weight: 1000;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 10px 8px 10px #888888;
`;
const StyledTable = styled("table")`
margin-left: auto;
    /* height: 86%; */
    width: 100%;
    // background: aqua;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    td{
      border:2px solid black;
      width:0%;
    }
`

export const Home = () => {
  const data = loadData("todoList")
  console.log("26", data);
  

  // const [data, setData] = useState([]);
  // useEffect(() => {
  // getData();
  // }, []);
  // const getData = () => {
  //   fetch(`https://fake-json-todo.herokuapp.com/todo`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log("15", res);
  //       setData(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  if (data === null) {
    return <Navigate to="/login" />;
  }
  return (
    <Main>
      {/* {console.log("35", data)} */}
      <LeftBar>
        <Sidebar />
      </LeftBar>
      <RightBar >
        <StyledTable>
          <thead>
            <tr>
              <th >Personal</th>
              <th >Official</th>
              <th >Other</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {console.log("76", data)}
                {data.map((i) => {
                  console.log("43", i);
                  if (i.isPersonal === true) {
                    return (
                      <>
                        <Card key={i.id}>
                          <br />
                          <h3>{i.title}</h3>
                          <p>{i.description}</p>
                          <p>{i.date}</p>
                          {/* <p>Personal</p> */}
                          <p>{i.progress}</p>
                          <p>{i.task}</p>
                          <br />
                        </Card>
                        <br />
                      </>
                    );
                  }
                })}</td>
              <td>{data.map((i) => {
                // console.log("43", i);
                if (i.isOfficial === true) {
                  return (
                    <>
                      <Card key={i.id}>
                        <br />
                        <h3>{i.title}</h3>
                        <p>{i.description}</p>
                        <p>{i.date}</p>
                        {/* <p>Official</p> */}
                        <p>{i.progress}</p>
                        <p>{i.task}</p>
                        <br />
                      </Card>
                      <br />
                    </>
                  );
                }
              })}</td>
              <td>{data.map((i) => {
                // console.log("43", i);
                if (i.isOther === true) {
                  return (
                    <>
                      <Card key={i.id}>
                        <br />
                        <h3>{i.title}</h3>
                        <p>{i.description}</p>
                        <p>{i.date}</p>
                        {/* <p>Other</p>                         */}
                        <p>{i.progress}</p>
                        <p>{i.task}</p>
                        <br />
                      </Card>
                      <br />
                    </>
                  );
                }
              })}</td>
            </tr>
          </tbody>
        </StyledTable>
      </RightBar>
    </Main >
  );
};
