import React, { useState, useRef } from "react";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";

function AddItem(props) {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  const locationRef = useRef("");
  const categoryRef = useRef("");
  const user_idRef = useRef(localStorage.id);

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      location: locationRef.current.value,
      category: categoryRef.current.value,
      user_id: user_idRef.current.value
    };
    axiosWithAuth()
      .post(
        "https://lbs-african-marketplace.herokuapp.com/items/additem/",
        data
      )
      .then(response => {})
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <StyledAdd>
      <form onSubmit={handleSubmit}>
        <Title>Name:</Title>
        <input
          name="name"
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
        />
        <Title>Description:</Title>
        <input
          name="Description"
          type="text"
          ref={descriptionRef}
          placeholder="Enter the description of your item"
        />
        <Title>Price:</Title>
        <input
          name="Price"
          type="integer"
          ref={priceRef}
          placeholder="Enter your price"
        />
        <Title>Location:</Title>
        <input
          name="Location"
          type="text"
          ref={locationRef}
          placeholder="What's your location"
        />
        <Title>Category:</Title>
        <input
          name="Category"
          type="text"
          ref={categoryRef}
          placeholder="What Category is your item"
        />
        <Title>Your ID:</Title>
        <select ref={user_idRef}>
          <option value={`${localStorage.id}`} type="text">
            {localStorage.id}
          </option>
        </select>
        <button type="submit">Add Item</button>
      </form>
    </StyledAdd>
  );
}

export default AddItem;

// Styling here:

const StyledAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
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
      border-radius: 5px;
      border: 0;
      color: #00B5E2;
      line-height: 27px;
      height: 30px;
      float: right;
      width: 200px;
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
          background: #00B5E2;
          color: blue;
    }
   
    }
`;

const Title = styled.h6`
  margin: 4px 0 0 25px;
  color: #00b5e2;
  border-radius: 5px;
  border: 1px blue;
`;
