import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { newTodoTask } from "../../redux/todo/action";
// import { StyledLink } from "../login/Login";
import { Sidebar } from "../sidebar/Sidebar";
import { LeftBar, Main, RightBar } from "../summary/Summary";

const Container = styled.div`
  background-image: linear-gradient(
    to right,
    rgb(242, 112, 156),
    rgb(255, 148, 114)
  );
  color: white;
  padding: 20px;
  height: 920px;
  width: 100%;
  h1 {
    color: black;
  }
`;
const StyledForm = styled.form`
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
  .submit {
    padding: 2% 5%;
    font-weight: 1000;
    color: black;
  }
`;
// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   font-size: large;
//   font-weight: 600;
//   &:hover {
//     color: black;
//   }
// `;

export const NewTask = () => {
  const dispatch=useDispatch()
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    progress: "",
    isPersonal: false,
    isOfficial: false,
    isOther: false,
  });
  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    // console.log(type);
    value = type === "checkbox" ? true : value;
    setForm({ ...form, [name]: value });
  };

  const {
    title,
    description,
    date,
    progress,
    isPersonal,
    isOfficial,
    isOther  
  } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(newTodoTask(form))
    
    // fetch(`https://fake-json-todo.herokuapp.com/todo`, {
    //   method: "post",
    //   body: JSON.stringify(form),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // setForm({
    //   title: "",
    //   description: "",
    //   date: "",
    //   progress: "",
    //   task: "",
    // });
  };

  return (
    <Main>
      <LeftBar>
        <Sidebar />
      </LeftBar>
      <RightBar>
        <Container>
          <h1>Register</h1>
          <br />
          <br />
          <StyledForm onSubmit={handleSubmit}>
            <br />
            <br />
            <label>
              {" "}
              Title :-
              <input
                type="text"
                placeholder="Enter Your Title"
                name="title"
                value={title}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Description :-
              <input
                type="text"
                placeholder="Enter Description"
                name="description"
                value={description}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Date :-
              <input
                type="text"
                placeholder="Enter Date"
                name="date"
                value={date}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <br />
            <label name="progress">
              Choose Any :-
              <select name="progress" value={progress} placeholder="Choose" onChange={handleChange}>
                <option value="todo">Todo</option>
                <option value="inprogress">Inprogress</option>
                <option value="done">Done</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              Personal
              <input
                type="checkbox"
                name="isPersonal"
                checked={isPersonal}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Official
              <input
                type="checkbox"
                name="isOfficial"
                checked={isOfficial}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Other
              <input
                type="checkbox"
                name="isOther"
                checked={isOther}
                onChange={handleChange}
              />
            </label>
{/* 
            <br />
            <br />
            <label>
              Sub Task :-
              <input
                type="text"
                placeholder="Write About Task "
                name="task"
                value={task}
                onChange={handleChange}
                required
              />
            </label> */}
            <br />
            <br />
            <input className="submit" type="submit" value="Submit" />
            <br />
            <br />
            <br />
            <br />
          </StyledForm>
        </Container>
      </RightBar>
    </Main>
  );
};
