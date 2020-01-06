import React from "react";
import styled from "styled-components";

const ProfileCard = props => {
  return (
    <Card>
      <h3>Your Username: {props.profile.username}</h3>
      <h3>You are registered as a: {props.profile.department}</h3>
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
