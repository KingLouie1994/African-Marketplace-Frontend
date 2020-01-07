import React from "react";
import styled from "styled-components";
import axiosWithAuth from "./axiosWithAuth";

const ItemCard = props => {
  function handleSubmit() {
    axiosWithAuth()
      .delete(`https://lbs-african-marketplace.herokuapp.com/items/:id`)
      .then(res => {
        localStorage.clear();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Card>
      <button onClick={() => handleSubmit()}>Delete Item</button>
      <h3>{props.items.id}</h3>
      <h3>Name : {props.items.name}</h3>
      <h3>Description : {props.items.description}</h3>
      <h3>Price : {props.items.price}$</h3>
      <h3>location : {props.items.location}</h3>
      <h3>category : {props.items.category}</h3>
    </Card>
  );
};

export default ItemCard;

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
