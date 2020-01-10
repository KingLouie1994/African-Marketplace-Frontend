import React from "react";
import styled from "styled-components";

const ItemCard = props => {
  return (
    <Card>
      <Title>{props.items.id}</Title>
      <Title>Name : {props.items.name}</Title>
      <Title>Description : {props.items.description}</Title>
      <Title>Price : {props.items.price}$</Title>
      <Title>location : {props.items.location}</Title>
      <Title>category : {props.items.category}</Title>
    </Card>
  );
};

export default ItemCard;

// Styling here:

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-item: space-between;
  border-color: white;
  border-radius: 5px;
  transition: 0.2s ease-in-out
  width: 333px;
  margin: 30px;
  &:hover {
    box-shadow: 0px 5px 100px -22px  rgba(0, 0, 0, 1);
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
  }
  border-color: white;
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
