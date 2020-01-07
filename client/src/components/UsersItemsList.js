import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";

export default function UsersItemsList(props) {
  const [items, setItems] = useState([]);

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
      .then(res => {
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      {items.map((item, index) => {
        return (
          <ItemCard key={index}>
            <h5>Item ID: {item.id}</h5>
            <h5>Name : {item.name}</h5>
            <h5>Description : {item.description}</h5>
            <h5>Price : {item.price}$</h5>
            <h5>location : {item.location}</h5>
            <h5>category : {item.category}</h5>
            <button onClick={() => handleSubmit(item.id)}>Delete Item</button>
          </ItemCard>
        );
      })}
    </div>
  );
}

// Styling here:

const ItemCard = styled.div`
  background-color: grey;
  padding: 2%;
`