import React, { useRef } from "react";
import axios from "axios";
import styled from "styled-components";

function Register(props) {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const departmentRef = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      department: departmentRef.current.value
    };
    axios
      .post("https://lbs-african-marketplace.herokuapp.com/auth/register", data)
      .then(response => {
        props.history.push("/login");
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <StyledRegister>
      <h1>Welcome to the European African Marketplace!</h1>
      <h2>Please register to start the survey</h2>
      <form onSubmit={handleSubmit}>
        <p>User name:</p>
        <input name="username" type="text" ref={usernameRef} />
        <p>Password:</p>
        <input name="password" type="text" ref={passwordRef} />
        <p>Department:</p>
        <input name="department" type="text" ref={departmentRef} />
        <button type="submit">SignUp</button>
        <p>Already have an account? <br/> Login here</p>
        <button type="submit">Login</button>
      </form>
    </StyledRegister>
  );
}

export default Register;

// Styling here:

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  background: lightblue;
  color: orange;

  & p {
    color: black;
    lighten: 40%;
    text-align: center;
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
