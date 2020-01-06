import React, { useRef } from "react";
import axios from "axios";
import styled from "styled-components";

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
        props.history.push(`/profile`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <StyledLogin>
      <h1>Welcome to the European African Marketplace!</h1>
      <h2>Please Login below!</h2>
      <form onSubmit={handleSubmit}>
        <p>User name:</p>
        <input name="username" type="text" ref={usernameRef} />
        <p>Password:</p>
        <input name="password" type="password" ref={passwordRef} />
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
  margin: 1vw;
  padding: 1vw;
  background: lightblue;

  p {
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
      background: white;
      color: palevioletred;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    }
  }
`;
