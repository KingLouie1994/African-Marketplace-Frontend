import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function GoToUsersProfile(props) {
  return (
    <Link to={`/user/${props.users.id}`}>
      <Button>Watch my Profile!</Button>
    </Link>
  );
}

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid blue;
  padding: 10px;
  background: #00b5e2;
  transistion: 0.15s ease-in-out;
  margin: 10px 0;
  color: lightblue;
  margin-left: 25px;
  &:hover {
    cursor: pointer;
    background: white;
    color: blue;
  }
`;
