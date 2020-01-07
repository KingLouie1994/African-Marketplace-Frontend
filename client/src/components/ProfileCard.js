import React from "react";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AddItem from "./AddItem";
import UsersItemsList from "./UsersItemsList";

const ProfileCard = props => {
  function handleSubmit() {
    axiosWithAuth()
      .delete(
        `https://lbs-african-marketplace.herokuapp.com/users/${localStorage.id}/`
      )
      .then(res => {
        localStorage.clear();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Card>
      <h3>Your Username: {props.profile.username}</h3>
      <h3>You are registered as a: {props.profile.department}</h3>
      <UsersItemsList />
      <AddItem />
      <Link to="/login">
        <Button onClick={() => handleSubmit()}>Delete your profile</Button>
      </Link>
    </Card>
  );
};
export default ProfileCard;

// Styling here:
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  background: white;
  color: orange;
  border-radius: 5px;
  transition: 0.2s ease-in-out
  width: 333px;
  margin: 30px;
  &:hover {
    box-shadow: 0px 5px 37px -22px  rgba(0, 0, 0, 1);
  }
`;

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid blue;
  padding: 10px;
  background: transparent;
  transistion: 0.15s ease-in-out;
  margin: 10px 0;
  color: blue;
  margin-left: 25px;
  &:hover {
    cursor: pointer;
    background: black;
    color: red;
  }`
