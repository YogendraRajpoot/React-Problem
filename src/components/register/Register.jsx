import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  h1{
    color:black;
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

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobilenumber: "",
    aboutyou: "",
    username: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const { name, email, password, username, mobilenumber, aboutyou } = form;

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
      method: "post",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    login();
  };
  const login = () => {
    navigate("/login");
  };

  return (
    <Container>
      <h1>Register</h1>
      <br />
      <br />
      <StyledForm onSubmit={hadleSubmit}>
        <br />
        <br />
        <label>
          {" "}
          Name :-
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Email :-
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={handleChange}
            required

          />
        </label>
        <br />
        <br />
        <label>
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
        <label>
          UserName :-
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
          Mobile-Number :-
          <input
            type="number"
            placeholder="Enter Your Mobile-Number"
            name="mobilenumber"
            value={mobilenumber}
            onChange={handleChange}
            required

          />
        </label>
        <br />
        <br />
        <label>
          About You :-
          <input
            type="text"
            placeholder="Write Something About You "
            name="aboutyou"
            value={aboutyou}
            onChange={handleChange}
            required

          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
        <StyledLink to={"/login"}>or Login</StyledLink>
        <br />
        <br />
      </StyledForm>
    </Container>
  );
};
