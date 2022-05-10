import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { istoken } from "../redux/action";
// import { token } from "../redux/action";

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
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 10px 8px 10px #888888;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: large;
  font-weight: 600;
  &:hover {
    color: black;
  }
`;

export const Login = () => {
  const dispatch = useDispatch();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "post",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.token);
        dispatch(istoken(res.token));
        login(res.token, username);
        // console.log(username);
      })
      .catch((err) => console.log(err));
  };

  const { username, password } = form;

  return (
    <Container>
      <h1>Login</h1>
      <br />
      <br />
      <StyledForm onSubmit={handleSubmit}>
        <br />
        <br />
        <label>
          Username :-
          <input
            type="text"
            placeholder="Enter Your Username"
            name="username"
            value={username}
            onChange={handleChange}
            required

          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Password :-
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={handleChange}
            required

          />
        </label>
        <br />
        <br />
        <input type="submit" value="Login" />
        <br />
        <br />
        <StyledLink to={"/register"}>or Sign up</StyledLink>
        <br />
        <br />
      </StyledForm>
    </Container>
  );
};
