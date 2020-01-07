import React from "react";
import styled from "styled-components";

const ItemCard = props => {
  return (
    <Card>
      <Title>{props.items.id}</Title>
      <Title>Name : {props.items.name}</Title>
      <Title>Description : {props.items.description}</Title>
      <Price>Price : {props.items.price}$</Price>
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
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  background: white;
  color: orange;
  border-radius: 5px;
  transition: 0.2s ease-in-out
  width: 333px;
  margin: 30px;
  &:hover {
    box-shadow: 0px 5px 37px -22px  rgba(0, 0, 0, 1);
  }
`;

const Title = styled.h3`
  font-weight: bold;
  margin: 10px 0 0 25px;
`;
const Price = styled.h3`
  margin-left: 25px;
  padding: 5px 0;
`;
