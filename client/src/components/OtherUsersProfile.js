import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";
import styled, { keyframes } from "styled-components";

export default function OtherUsersProfile(props) {
  const [users, setUsers] = useState({});
  const [usersItems, setUsersItems] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://lbs-african-marketplace.herokuapp.com/users/${props.userId}`
      )
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  axiosWithAuth()
    .get(
      `https://lbs-african-marketplace.herokuapp.com/users/${props.userId}/items`
    )
    .then(response => {
      setUsersItems(response.data.items);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <div className="row">
      <StyledDiv>Welcome to {users.username} Portal</StyledDiv>

      <h3>I'm a {users.department} on this marketplace</h3>
      <h3>Find My Listing Below:</h3>

      {usersItems.map((item, index) => {
        return (
          <ItemCard key={index}>
            <Title>Name: {item.name}</Title>
            <Title>Description: {item.description}</Title>
            <Title>Price: {item.price}</Title>
          </ItemCard>
        );
      })}
    </div>
  );
}

// Styling here:

const ItemCard = styled.div`
display: grid;
color: orange;
border-radius: 5px;
transition: 0.2s ease-in-out
width: 333px;
margin: 30px;
&:hover {
  box-shadow: 0px 5px 100px -22px  rgba(0, 0, 0, 1);
  border: 0.04rem solid rgba(0, 0, 0, 0.2);
}
border-color: transparent;
transition: all 1s linear;
`;

const Title = styled.h3`
  font-weight: lighter;
  margin: 10px 0 0 25px;
  color: #00b5e2;
  border-radius: 5px;
  border: 1px solid #f0f8ff;
  padding: 10px;
`;

function rotationBuilder(degree) {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-${degree}deg);
    }
    50% {
      transform: rotate(0deg);
      opacity: .9
    }
    75% {
      transform: rotate(${degree}deg);
    }
  `;
  return rotation;
}

const StyledDiv = styled.div`
  animation: ${rotationBuilder(10)} 1s linear infinite;
`;
