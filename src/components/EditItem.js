import React, { useState, useEffect, useRef } from "react";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";

function EditItem(id) {
  const idRef = useRef("");
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  const locationRef = useRef("");
  const categoryRef = useRef("");

  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://lbs-african-marketplace.herokuapp.com/users/${localStorage.id}/items`
      )
      .then((response) => {
        setItems(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      id: idRef.current.value,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      location: locationRef.current.value,
      category: categoryRef.current.value,
    };

    items.map((item) => {
      axiosWithAuth()
        .put(
          `https://lbs-african-marketplace.herokuapp.com/items/${item.id}`,
          data
        )
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    });
  }

  if (showForm === false) {
    return (
      <Button onClick={() => setShowForm(true)}>Show form to edit items</Button>
    );
  } else {
    return (
      <div>
        <StyledEdit>
                
          <form onSubmit={handleSubmit}>
            <Title>Item to edit:</Title>
            <br />
            <select ref={idRef}>
              {items.map((item, index) => {
                return (
                  <option value={`${item.id}`} type="integer" key={index}>
                    {item.id}
                  </option>
                );
              })}
            </select>
            <Title>Name:</Title> 
            <input
              name="name"
              type="text"
              ref={nameRef}
              placeholder="Enter your name"
            />
            <Title>Description:</Title>
            <input
              name="Description"
              type="text"
              ref={descriptionRef}
              placeholder="Enter the description of your item"
            />
            <Title>Price:</Title>
            <input
              name="Price"
              type="integer"
              ref={priceRef}
              placeholder="Enter your price"
            />
            <Title>Location:</Title>
            <input
              name="Location"
              type="text"
              ref={locationRef}
              placeholder="What's your location"
            />
            <Title>Category:</Title>
            <input
              name="Category"
              type="text"
              ref={categoryRef}
              placeholder="What Category is your item"
            />
            <Button>Edit Item</Button>
          </form>
              
          <Button onClick={() => setShowForm(false)}>
            Hide the form to edit Items
          </Button>
        </StyledEdit>
      </div>
    );
  }
}
export default EditItem;

const StyledEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  color: orange;
  border: solid 1px white;
  border-radius: 5px;
  & p {
    color: black;
    text-align: center;
  }
  & form {
    display: flex;
    flex-direction: column;
    & input {
      border-color: papayawhip;
      border-radius: 5px;
      border: 0;
      color: #00b5e2;
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
      margin: 10px 0;
      color: lightblue;
      margin-left: 25px;
      &:hover {
        cursor: pointer;
        background: #00b5e2;
        color: blue;
      }
    }
  }
`;

const Title = styled.h6`
  margin: 4px 0 0 25px;
  color: #00b5e2;
  border-radius: 5px;
  border: 1px blue;
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
    background: #00b5e2;
    color: blue;
  }
`;
