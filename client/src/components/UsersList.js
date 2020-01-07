import React from "react";
import styled from "styled-components";

const UsersList = props => {
  return (
    <Card>
      <Title>{props.users.username}</Title>
      <Title>{props.users.department}</Title>
    </Card>
  );
};

export default UsersList;

const Card = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  background: white;
  color: orange;
  border-radius: 10px;
  transition: 0.2s ease-in-out
  width: 333px;
  margin: 30px;
  &:hover {
    box-shadow: 0px 5px 100px -22px  rgba(0, 0, 0, 1);
  }
`;
const Title = styled.h6`
  font-weight: ;
  margin: 10px 0 0 25px;
  color: #00b5e2;
  border-radius: 5px;
  border: 10px solid #f0f8ff;
  padding: 10px;
`;
