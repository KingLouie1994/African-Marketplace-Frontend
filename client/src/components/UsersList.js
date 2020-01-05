import React from "react";
import styled from "styled-components";

const UsersList = props => {
  return (
    <Card>
      <h3>{props.users.id}</h3>
      <h3>{props.users.username}</h3>
      <h3>{props.users.department}</h3>
    </Card>
  );
};

export default UsersList;

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
