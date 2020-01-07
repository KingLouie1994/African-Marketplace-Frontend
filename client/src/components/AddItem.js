import React, { useRef } from "react";
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
      <h1>Add New Items</h1>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          name="name"
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
        />
        <p>Description:</p>
        <input
          name="Description"
          type="text"
          ref={descriptionRef}
          placeholder="Enter the description of your item"
        />
        <p>Price:</p>
        <input
          name="Price"
          type="integer"
          ref={priceRef}
          placeholder="Enter your price"
        />
        <p>Location:</p>
        <input
          name="Location"
          type="text"
          ref={locationRef}
          placeholder="What's your location"
        />
        <p>Category:</p>
        <input
          name="Category"
          type="text"
          ref={categoryRef}
          placeholder="What Category is your item"
        />
        <p>Your ID:</p>
        <select ref={user_idRef}>
          <option value={`${localStorage.id}`} type="text">
            {localStorage.id}
          </option>
        </select>
        <button type="submit">Submit Your Listing</button>
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
  background: lightblue;
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
    }
    & button {
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
    }
  }
`;
