import React from "react";
import styled from "styled-components";

const ProfileCard = props => {
  return (
    <Card>
      <h1>Here should be your Profile page</h1>
      <h2>User name: {props.user.username} </h2>
    </Card>
  );
};

export default ProfileCard;

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