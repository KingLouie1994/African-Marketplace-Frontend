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
        <button onClick={() => handleSubmit()}>Delete your profile</button>
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
  background: lightblue;
  color: orange;
`;
