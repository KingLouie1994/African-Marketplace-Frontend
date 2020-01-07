import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";

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
    <div>
      <h1>Hello, my name is {users.username}</h1>
      <h3>I'm a {users.department} on this marketplace</h3>
      <h3>This is my Itemlist:</h3>
      {usersItems.map((item, index) => {
        return (
          <ItemCard key={index}>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
          </ItemCard>
        );
      })}
    </div>
  );
}

// Styling here:

const ItemCard = styled.div`
  background-color: lightblue;
  color: black;
  padding: 1%;
  margin: 2%;
`