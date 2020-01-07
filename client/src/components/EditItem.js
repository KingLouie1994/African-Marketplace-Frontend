import React, { useRef } from "react";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";

function EditItem() {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  const locationRef = useRef("");
  const categoryRef = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      nameRef: nameRef.current.value,
      descriptionRef: descriptionRef.current.value,
      priceRef: priceRef.current.value,
      locationRef: locationRef.current.value,
      categoryRef: categoryRef.current.value
    };
    axiosWithAuth()
      .put(`https://lbs-african-marketplace.herokuapp.com/items`, data)
      .then(response => {})
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <StyledEdit>
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
          ref={nameRef}
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
        <Button type="submit">Edit Item</Button>
      </form>
    </StyledEdit>
  );
}
export default EditItem;

const StyledEdit = styled.div`
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
  }
`;
