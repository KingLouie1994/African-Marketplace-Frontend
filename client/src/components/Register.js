import React, { useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img1 from "../img/hero.jpg";

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
    <Background>
      <StyledRegister>
        <h1>Welcome to the European African Marketplace!</h1>
        <h3>Register To Trade</h3>
        <form onSubmit={handleSubmit}>
          <Title>User name</Title>
          <Input name="username" type="text" ref={usernameRef} />
          <Title>Password</Title>
          <Input name="password" type="text" ref={passwordRef} />
          <Title>Department</Title>
          <Select ref={departmentRef}>
            <option type="text"></option>
            <option value="buyer" type="text">
              Buyer
            </option>
            <option value="seller" type="text">
              Seller
            </option>
          </Select>
          <button type="submit">SignUp</button>
          <Title>
            Already have an account? <br /> Login here
          </Title>
          <Link to="/login">
            <button>Login </button>
          </Link>
        </form>
      </StyledRegister>
    </Background>
  );
}

export default Register;

// Styling here:

const Background = styled.div`
  background-image: url(${img1});
`;

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vw;
  padding: 1vw;
  color: orange;
  &:hover {
    box-shadow: 0px 5px 37px -22px rgba(0, 0, 0, 1);
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
  }

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
      border-radius: 5px;
      border: 1px solid blue;
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
  font-weight: bold;
  font-size: 30px;
`;

const Title = styled.h6`
  margin: 4px 0 0 25px;
  color: #00b5e2;
  border-radius: 5px;
  border: 1px blue;
  font-weight: lighter;
`;

const Select = styled.select`
  background: white;
  width: 400px;
  padding: 10px;
  font-size: 20px;
  line-height: 1;
  border: 0;
  border-radius: 0;
  height: 40px;
  -webkit-appearance: none;
  color: #00b5e2;
`;
