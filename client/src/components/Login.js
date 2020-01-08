import React, { useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import * as JWT from "jwt-decode";
import img from "../img/hero1.jpg";

function LoginForm(props) {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };
    axios
      .post("https://lbs-african-marketplace.herokuapp.com/auth/login", data)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        const token = response.data.token;
        const decodedToken = JWT(token);
        localStorage.setItem("id", decodedToken.subject);
        localStorage.setItem("department", decodedToken.department);
        props.history.push(`/profile`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <StyledLogin>
      <h1>European African Marketplace!</h1>
      <h2>Login below!</h2>
      <form onSubmit={handleSubmit}>
        <Title>User name:</Title>
        <Input
          name="username"
          type="text"
          ref={usernameRef}
          placeholder="Enter Your Username"
        />
        <Title>Password:</Title>
        <Input
          name="password"
          type="password"
          ref={passwordRef}
          placeholder="Enter Your Password"
        />
        <button type="submit">Log-in</button>
      </form>
    </StyledLogin>
  );
}

export default LoginForm;

// Styling here:

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vw;
  padding: 1vw;
  color: orange;
  &:hover {
    box-shadow: 0px 5px 37px -22px rgba(0, 0, 0, 1);
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    background-image: url(${img});
  }
  p {
    text-align: center;
    color: black;
    lighten: 40%;
    text-align: center;
  }

  h1,
  h2 {
    color: orange;
  }

  & form {
    display: flex;
    flex-direction: column;

    & input {
      border-color: papayawhip;
    }

    & button {
      border-radius: 5px;
      border: 1px solid blue;
      font-weight: bold;
      padding: 10px;
      background: transparent;
      transistion: 0.15s ease-in-out;
      margin: 10px 0;
      color: lightblue;
      margin-left: 25px;
      &:hover {
        cursor: pointer;
        background: #00b5e2;
        color: blue;
      }
    }
  }
`;

const Input = styled.input`
  border-color: papayawhip;
  border-radius: 5px;
  border: 0;
  color: #00b5e2;
  line-height: 27px;
  height: 30px;
  float: right;
  width: 400px;
`;

const Title = styled.h6`
  margin: 4px 0 0 25px;
  color: #00b5e2;
  border-radius: 5px;
  border: 1px blue;
  font-weight: lighter;
`;
