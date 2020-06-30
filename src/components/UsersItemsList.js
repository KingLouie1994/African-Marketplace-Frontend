import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";

export default function UsersItemsList(props) {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://lbs-african-marketplace.herokuapp.com/users/${localStorage.id}/items`
      )
      .then(response => {
        setItems(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  });

  function handleSubmit(id) {
    axiosWithAuth()
      .delete(`https://lbs-african-marketplace.herokuapp.com/items/${id}/`)
      .then(response => {})
      .catch(error => {
        console.log(error);
      });
  }

  if (showItems === false) {
    return <Button onClick={() => setShowItems(true)}>Show my Items</Button>;
  } else {
    return (
      <div>
        {items.map((item, index) => {
          return (
            <ItemCard key={index}>
              <Title>Item ID: {item.id}</Title>
              <Title>Name : {item.name}</Title>
              <Title>Description : {item.description}</Title>
              <Title>Price : {item.price}$</Title>
              <Title>location : {item.location}</Title>
              <Title>category : {item.category}</Title>
              <Button onClick={() => handleSubmit(item.id)}>Delete Item</Button>
            </ItemCard>
          );
        })}
        <Button onClick={() => setShowItems(false)}>Hide my Items</Button>
      </div>
    );
  }
}

// Styling here:

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  border-color: white;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  width: 333px;
  margin: 30px;


  &:hover {
    box-shadow: 0px 5px 100px -22px  rgba(0, 0, 0, 1);
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
  }
  border-color: white;
  transition: all 1s linear;
`;

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid blue;
  padding: 10px;
  background: transparent;
  margin: 10px 0;
  color: lightblue;
  margin-left: 25px;
  &:hover {
    cursor: pointer;
    background: black;
    color: red;
  }
`;

const Title = styled.h3`
  font-weight: lighter;
  margin: 10px 0 0 25px;
  color: #00b5e2;
  border-radius: 5px;
  border: 1px solid #f0f8ff;
  padding: 10px;
`;
